<script src="./js/person-modal.js" type="module"></script>
<section class="person-modal">
    <div class="center">
        <img class="person-photo" src="" alt="">
        <h4><i class="fas fa-user"></i> [PROFILE]</h4>
        <ul class="profile">
            <li>
                <small>이름</small>
                <em class="person-name"></em>
            </li>
            <li>
                <small>직업</small>
                <em class="person-job"></em>
            </li>
            <li>
                <small>생일</small>
                <em class="person-life"></em>
            </li>
            <li>
                <small>출생지</small>
                <em class="person-place"></em>
            </li>
            <li>
                <em class="person-biography"></em>
            </li>
        </ul>
        <button value=".profile" class="more-btn">
            <span class="open"><i class="fas fa-toggle-off"></i></span>
            <span class="close"><i class="fas fa-toggle-on"></i></span>
        </button>
        <h4><i class="fas fa-video"></i> [filmography]</h4>
        <ul class="filmography"></ul>
        <button value=".filmography" class="more-btn">
            <span class="open"><i class="fas fa-toggle-off"></i></span>
            <span class="close"><i class="fas fa-toggle-on"></i></span>
        </button>
    </div>
    <button class="modal-close-btn"><i class="fa-solid fa-xmark"></i></button>
</section>