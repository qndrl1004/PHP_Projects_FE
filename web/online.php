<?php include "sub_header.php"?>
<script src="./js/online.js"></script>
<h2 class="sub_title">온라인 문의</h2>
<section class="online">
<div class="sub_summary">
<p class="emphasis">궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요</p>
<p>담당자가 확인 후 빠른 회신을 약속합니다.</p>
</div>
<form action="">
    <div>
       <label for="id1">성명</label>
        <p>
            <input required id="id1" type="text">
        </p>
    </div>
    <div >
       <label>휴대전화</label>
        <p class="tel">
            <input required data-digit="1" maxlength="3" title="연락처 첫번째 세자리" type="tel">
            <input required data-digit="2" maxlength="4" title="연락처 두번째 세자리" type="tel">
            <input required data-digit="3" maxlength="4" title="연락처 세번째 세자리" type="tel">
        </p>
    </div>
    <div>
       <label for="id2">이메일</label>
        <p>
            <input required id="id2" type="email">
        </p>
    </div>
    <div>
       <label for="id3">제목</label>
        <p>
            <input required id="id3" type="text">
        </p>
    </div>
    <div>
       <label for="id4">설명</label>
        <p>
            <textarea required id="id4"></textarea>
        </p>
    </div>
    <div>
       <label for="id5">첨부파일</label>
        <p>
            <input id="id5" type="file">
        </p>
    </div>
    <p>
        <button type="submit" disabled>확인</button>
        <button type="reset">취소</button>
    </p>
</form>
</section>
<?php include "sub_footer.php"?>