// 블로그 포스트 데이터 (실제 마크다운 파일 연결)
const posts = [
    {
        id: 1,
        title: '블로그를 시작합니다',
        date: '2023-04-01',
        section: 'thoughts',
        path: '../posts/thoughts/hello-world.md',
        summary: '첫 번째 블로그 포스트입니다.',
        tags: ['블로그', '소개'],
        thumbnail: '../images/hello.jpg'
    },
    {
        id: 2,
        title: 'JavaScript의 최신 기능',
        date: '2023-04-15',
        section: 'tech-news',
        path: '../posts/tech-news/javascript-features.md',
        summary: 'JavaScript의 새로운 기능에 대해 알아봅니다.',
        tags: ['JavaScript', '기술', '웹개발'],
        thumbnail: '../images/javascript.jpg'
    },
    {
        id: 3,
        title: 'React 튜토리얼',
        date: '2023-05-01',
        section: 'learning',
        path: '../posts/learning/react-tutorial.md',
        summary: 'React 기초부터 고급 기능까지 배워봅시다.',
        tags: ['React', '튜토리얼', '프론트엔드'],
        thumbnail: '../images/react.jpg'
    }
];

// 섹션과 폴더 정의
const sections = [
    { section: "thoughts", folder: "posts/thoughts", title: "생각 정리" },
    { section: "tech-news", folder: "posts/tech-news", title: "기술 소식" },
    { section: "learning", folder: "posts/learning", title: "학습 노트" },
];

// 프로젝트 데이터
const projects = [
    {
        id: 1,
        title: '한복 가상피팅 애플리케이션',
        date: '2025-02',
        description: '사용자가 업로드한 자신의 사진에 다양한 한복을 입혀볼 수 있는 가상 피팅 애플리케이션',
        tags: ['Flutter', 'Docker', 'GKE', 'Kubernetes', '모델 탐색'],
        thumbnail: 'images/hanbok.jpg',
        link: 'https://github.com/leehan32/try-on-hanbok'
    },
    {
        id: 2,
        title: 'LLM 쿼리 기반 대시보드 생성기',
        date: '2025-03',
        description: 'LLM을 활용해 자연어 질문으로부터 SQL 쿼리를 생성하고 시각화하는 툴',
        tags: ['Streamlit', 'LangChain', 'PostgreSQL', '데이터증강', 'Docker'],
        thumbnail: 'images/text2sql.png.jpg',
        link: 'https://github.com/leehan32/llm-query-tool'
    }
];

// 타임라인 데이터 (역순으로 정렬: 최신 항목이 위에 표시)
const timelineItems = [
    {
        id: 6,
        date: '2025-04-22',
        title: 'LLM 쿼리 도구 프로젝트 완료',
        description: '별도 스터디로 진행한 LLM 기반 SQL 쿼리 도구 개발 완료',
        position: 'right',
        projectId: 2
    },
    {
        id: 5,
        date: '2025-04-17',
        title: '아이펠 코어 과정 완료',
        description: '개발 기초 과정을 성공적으로 마치고 실무 프로젝트 경험 확보',
        position: 'left'
    },
    {
        id: 4,
        date: '2025-04-15',
        title: '한복 가상피팅 프로젝트 완료',
        description: '아이펠 과정 내에서 한복 가상피팅 애플리케이션 개발 완료',
        position: 'right',
        projectId: 1
    },
    {
        id: 3,
        date: '2025-03-25',
        title: 'LLM 쿼리 도구 스터디 시작',
        description: '별도 스터디로 Streamlit, LangChain, PostgreSQL을 활용한 동적 대시보드 생성기 개발 시작',
        position: 'left',
        projectId: 2
    },
    {
        id: 2,
        date: '2025-02-21',
        title: '한복 가상피팅 프로젝트 시작',
        description: '아이펠 과정 내에서 GKE, Docker, Flutter를 활용한 한복 가상피팅 애플리케이션 개발 시작',
        position: 'right',
        projectId: 1
    },
    {
        id: 1,
        date: '2024-10-23',
        title: '아이펠 코어 과정 시작',
        description: '파이썬, 텐서플로우, 플러터 등 개발 기초 학습 시작',
        position: 'left'
    }
];

// 테마 전환 기능
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // 아이콘 업데이트
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    }
}

// 저장된 테마 로드
function loadTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // 아이콘 업데이트
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    }
}

// 이미지 존재 확인 및 기본 이미지로 대체
function checkImage(url, callback) {
    const img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

// 타임라인 표시
function displayTimeline(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const timelineEl = document.createElement('div');
    timelineEl.className = 'timeline';
    
    timelineItems.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${item.position}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        timelineEl.appendChild(timelineItem);
    });
    
    container.appendChild(timelineEl);
}

// 주요 프로젝트 표시
function displayFeaturedProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        // 미리 이미지 로드 테스트
        const imgSrc = project.thumbnail;
        const imgPlaceholder = 'images/default.jpg';
        
        projectElement.innerHTML = `
            <div class="project-thumbnail">
                <img src="${imgSrc}" alt="${project.title}" onerror="this.onerror=null; this.src='${imgPlaceholder}';">
            </div>
            <div class="project-details">
                <h3>${project.title}</h3>
                <p class="project-date">${project.date}</p>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="cta-button" target="_blank">자세히 보기</a>
            </div>
        `;
        
        container.appendChild(projectElement);
    });
}

// 전체 프로젝트 목록 표시
function displayAllProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // 날짜별 정렬
    const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = '';
    
    sortedProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        
        // 이미지 경로 수정
        const imgSrc = '../' + project.thumbnail;
        const imgPlaceholder = '../images/default.jpg';
        
        projectElement.innerHTML = `
            <div class="project-thumbnail">
                <img src="${imgSrc}" alt="${project.title}" onerror="this.onerror=null; this.src='${imgPlaceholder}';">
            </div>
            <h3>${project.title}</h3>
            <p class="project-date">${project.date}</p>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="cta-button" target="_blank">자세히 보기</a>
        `;
        
        container.appendChild(projectElement);
    });
}

// 이미지 프리로딩
function preloadImages() {
    const imageUrls = projects.map(project => '../' + project.thumbnail);
    imageUrls.push('../images/default.jpg');
    
    // 중복 제거
    const uniqueUrls = [...new Set(imageUrls)];
    
    // 프리로드
    uniqueUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 이미지 프리로딩
    preloadImages();
    
    // 테마 로드
    loadTheme();
    
    // 테마 토글 버튼
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 타임라인 로드
    if (document.getElementById('timeline-container')) {
        displayTimeline('timeline-container');
    }
    
    // 주요 프로젝트 로드 (홈페이지용)
    if (document.getElementById('featured-projects')) {
        displayFeaturedProjects('featured-projects');
    }
    
    // 전체 프로젝트 로드
    if (document.getElementById('all-projects')) {
        displayAllProjects('all-projects');
    }
});
