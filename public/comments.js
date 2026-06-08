import { db } from './firebase-config.js';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  const commentContainer = document.getElementById('comments-container');
  if (!commentContainer) return; // Not a page with comments

  const pageId = commentContainer.dataset.pageId;
  const commentsList = document.getElementById('comments-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const submitBtn = document.getElementById('submit-comment');
  const user = localStorage.getItem('zengince_user');

  // Load Comments
  const q = query(
    collection(db, 'comments'),
    where('pageId', '==', pageId),
    orderBy('createdAt', 'desc')
  );

  onSnapshot(q, (snapshot) => {
    commentsList.innerHTML = '';
    
    if (snapshot.empty) {
      commentsList.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          Bu içeriğe henüz yorum yapılmamış. İlk yorumu sen yap!
        </div>
      `;
      return;
    }

    snapshot.forEach((doc) => {
      const data = doc.data();
      const dateStr = data.createdAt ? new Date(data.createdAt.toDate()).toLocaleString('tr-TR', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
      }) : 'Az önce';

      const commentHTML = `
        <div class="comment-item">
          <div class="comment-header">
            <div class="comment-avatar">${data.author.charAt(0).toUpperCase()}</div>
            <div>
              <div class="comment-author">@${data.author}</div>
              <div class="comment-date">${dateStr}</div>
            </div>
          </div>
          <div class="comment-body">${escapeHTML(data.text)}</div>
        </div>
      `;
      commentsList.insertAdjacentHTML('beforeend', commentHTML);
    });
  });

  // Add Comment
  if (commentForm && user) {
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = commentInput.value.trim();
      if (!text) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Gönderiliyor...';

      try {
        await addDoc(collection(db, 'comments'), {
          pageId: pageId,
          text: text,
          author: user,
          createdAt: serverTimestamp()
        });
        commentInput.value = '';
      } catch (error) {
        console.error("Yorum ekleme hatası:", error);
        alert("Yorum gönderilemedi: " + error.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Yorumu Gönder';
      }
    });
  }
});

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
