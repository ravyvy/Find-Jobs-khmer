/* ===== Post Job Page Logic ===== */
const POST_STORAGE_KEY = 'jobkh_user_posts';
let tagsList = [];

document.addEventListener('DOMContentLoaded', () => {
    initPostJobForm();
    initTagsInput();
    renderMyPosts();
});

function getUserPosts() {
    try { return JSON.parse(localStorage.getItem(POST_STORAGE_KEY)) || []; }
    catch (e) { return []; }
}

function saveUserPosts(posts) {
    localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(posts));
}

function initTagsInput() {
    const input = document.getElementById('pj-tags-input');
    if (!input) return;
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const val = this.value.trim().replace(',', '');
            if (val && tagsList.length < 5 && !tagsList.includes(val)) {
                tagsList.push(val);
                renderTags();
            }
            this.value = '';
        }
    });
}

function renderTags() {
    const wrapper = document.getElementById('tag-wrapper');
    const input = document.getElementById('pj-tags-input');
    wrapper.querySelectorAll('.tag-pill').forEach(el => el.remove());
    tagsList.forEach((tag, i) => {
        const pill = document.createElement('span');
        pill.className = 'tag-pill';
        pill.innerHTML = tag + ' <span class="remove-tag" onclick="removeTag(' + i + ')">&times;</span>';
        wrapper.insertBefore(pill, input);
    });
}

function removeTag(i) { tagsList.splice(i, 1); renderTags(); }

function initPostJobForm() {
    const form = document.getElementById('post-job-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        const required = ['pj-title', 'pj-company', 'pj-location', 'pj-category', 'pj-type', 'pj-experience', 'pj-description', 'pj-phone'];
        const minLen = {
            'pj-title': 2, 'pj-company': 2, 'pj-location': 1, 'pj-category': 1,
            'pj-type': 1, 'pj-experience': 1, 'pj-description': 20, 'pj-phone': 3
        };
        required.forEach(id => {
            const el = document.getElementById(id);
            const grp = el.closest('.form-group-post');
            if (el.value.trim().length < (minLen[id] || 1)) {
                grp.classList.add('has-error'); valid = false;
            } else { grp.classList.remove('has-error'); }
        });

        if (!valid) {
            alert('សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់អោយបានត្រឹមត្រូវ។ (Please fix the errors in the form)');
            return;
        }

        const sMin = document.getElementById('pj-salary-min').value;
        const sMax = document.getElementById('pj-salary-max').value;
        const salaryText = sMin && sMax ? ('$' + sMin + ' - $' + sMax) : (sMin ? '$' + sMin : (sMax ? '$' + sMax : 'N/A'));

        const currentUser = Auth.getSession();
        const newJob = {
            id: 'user_' + Date.now(),
            title: document.getElementById('pj-title').value.trim(),
            company: document.getElementById('pj-company').value.trim(),
            logo: document.getElementById('pj-company').value.trim().substring(0, 2).toUpperCase(),
            location: document.getElementById('pj-location').value,
            salary: salaryText,
            salaryNum: parseInt(sMax) || parseInt(sMin) || 0,
            type: document.getElementById('pj-type').value,
            category: document.getElementById('pj-category').value,
            experience: document.getElementById('pj-experience').value,
            tags: [...tagsList],
            posted: new Date().toLocaleDateString('km-KH'),
            description: document.getElementById('pj-description').value.trim(),
            requirements: (document.getElementById('pj-requirements').value.trim() || '').split('\n').filter(l => l.trim()),
            benefits: (document.getElementById('pj-benefits').value.trim() || '').split('\n').filter(l => l.trim()),
            companyOverview: document.getElementById('pj-company-overview').value.trim() || '',
            phone: document.getElementById('pj-phone').value.trim(),
            telegram: document.getElementById('pj-telegram').value.trim() || '',
            isUserPost: true,
            username: currentUser ? currentUser.username : 'Guest',
            createdAt: new Date().toISOString()
        };

        const posts = getUserPosts();
        posts.unshift(newJob);
        saveUserPosts(posts);

        const popup = document.getElementById('post-success-popup');
        if (popup) popup.classList.add('active');
        form.reset();
        tagsList = [];
        renderTags();
        renderMyPosts();
    });

    document.querySelectorAll('.form-group-post input,.form-group-post select,.form-group-post textarea').forEach(el => {
        el.addEventListener('input', function () { this.closest('.form-group-post').classList.remove('has-error'); });
    });
}

function renderMyPosts() {
    const container = document.getElementById('my-posts-list');
    const countEl = document.getElementById('my-posts-count');
    if (!container) return;

    const currentUser = Auth.getSession();
    if (!currentUser) return;

    const allPosts = getUserPosts();
    const posts = allPosts.filter(p => p.username === currentUser.username);

    if (countEl) countEl.textContent = posts.length;

    if (!posts.length) {
        container.innerHTML = '<div class="my-posts-empty"><i class="fas fa-inbox"></i><p>\u1798\u17B7\u1793\u1791\u17B6\u1793\u17CB\u1798\u17B6\u1793\u1780\u17B6\u179A\u1784\u17B6\u179A\u178A\u17C2\u179B\u1794\u17B6\u1793\u1794\u17D2\u179A\u1780\u17B6\u179F\u1793\u17C5\u17A1\u17BE\u1799\u1791\u17C1</p></div>';
        return;
    }
    container.innerHTML = posts.map(job => `
    <div class="user-job-card">
      <span class="badge-user">\u1794\u17D2\u179A\u1780\u17B6\u179F\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780</span>
      <h3>${job.title}</h3>
      <div class="company-line"><i class="far fa-building"></i> ${job.company}</div>
      <div class="meta-line">
        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
        <span><i class="fas fa-clock"></i> ${job.type}</span>
        <span><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
        <span><i class="fas fa-calendar"></i> ${job.posted}</span>
      </div>
      <button class="btn-delete-post" onclick="deletePost('${job.id}')"><i class="fas fa-trash-alt"></i> \u179B\u17BB\u1794</button>
    </div>`).join('');
}

function deletePost(id) {
    if (!confirm('\u178F\u17BE\u17A2\u17D2\u1793\u1780\u1796\u17B7\u178F\u1787\u17B6\u1785\u1784\u17CB\u179B\u17BB\u1794\u1780\u17B6\u179A\u1784\u17B6\u179A\u1793\u17C1\u17C7?')) return;
    saveUserPosts(getUserPosts().filter(p => p.id !== id));
    renderMyPosts();
}

function closePostPopup() {
    const p = document.getElementById('post-success-popup');
    if (p) p.classList.remove('active');
}
