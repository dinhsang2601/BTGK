const culturalData = [
    {
        id: 1,
        title: "Đèn lồng phố Hội",
        desc: "Tự tay làm nên chiếc đèn lồng truyền thống giữa lòng phố cổ thanh bình.",
        image: "assets/images/hoi-an-lantern.jpg" 
    },
    {
        id: 2,
        title: "Nhuộm Chàm Tây Bắc",
        desc: "Bí quyết nhuộm vải tự nhiên của đồng bào H'Mông tại Sapa mờ sương.",
        image: "assets/images/sapa-indigo.jpg"
    },
    {
        id: 3,
        title: "Vuốt gốm Bát Tràng",
        desc: "Lắng nghe câu chuyện trăm năm và tạo ra tác phẩm gốm của riêng bạn.",
        image: "assets/images/bat-trang-pottery.jpg"
    },
    {
        id: 4,
        title: "Kiến trúc Cố đô Huế",
        desc: "Dấu ấn vàng son của triều đại phong kiến qua lăng tẩm, đền đài.",
        image: "assets/images/hue-architecture.jpg"
    },
    {
        id: 5,
        title: "Chợ nổi Cái Răng",
        desc: "Nhịp sống lênh đênh trên sông nước miền Tây đậm đà tình quê.",
        image: "assets/images/cai-rang-market.jpg"
    },
    {
        id: 6,
        title: "Nón lá Xứ Thanh",
        desc: "Tìm hiểu nghệ thuật đan nón lá chằm tinh tế qua bàn tay nghệ nhân.",
        image: "assets/images/non-la-making.jpg"
    }
];

function renderCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">Không tìm thấy kết quả nào phù hợp.</p>';
        return;
    }

    data.forEach(item => {
        const cardHTML = `
            <div class="card">
                <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='https://via.placeholder.com/400x250?text=Lỗi+Ảnh'">
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.desc}</p>
                    <a href="#" class="card-link">Xem chi tiết &rarr;</a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    renderCards(culturalData);

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if(searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const searchTerm = searchInput.value.trim().toLowerCase();
            
            const filteredData = culturalData.filter(item => {
                return item.title.toLowerCase().includes(searchTerm) || 
                       item.desc.toLowerCase().includes(searchTerm);
            });

            renderCards(filteredData);
            
            document.getElementById('cards-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});