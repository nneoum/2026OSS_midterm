// 캠퍼스 분실물 관리: 배열이 저장소 역할 (서버/DB 없음)
let items = [
  { id: 1, name: "파란 우산", place: "도서관", foundDate: "2026-10-12", returned: false },
  { id: 2, name: "학생증", place: "학생회관", foundDate: "2026-10-13", returned: true },
  { id: 3, name: "보조배터리", place: "강의동", foundDate: "2026-10-14", returned: false }
];
let nextId = 4;
const form = document.querySelector("#itemForm");
const rows = document.querySelector("#itemRows");
const message = document.querySelector("#message");

function render(list = items) {
  rows.innerHTML = "";
  list.forEach(function (item) {
    const tr = document.createElement("tr");
    // TODO Q4-A: 목록의 '상태' 칸에 알맞은 문자열을 출력 (반납완료 / 보관중)

    const statusText = "상태 미정";
    tr.innerHTML = `
      <td>${item.id}</td><td>${item.name}</td>
      <td>${item.place}</td><td>${item.foundDate}</td>
      <td class="status-cell">${statusText}</td>
      <td>
        <button type="button" class="btn btn-sm btn-outline-primary edit-btn">상태변경</button>
        <button type="button" class="btn btn-sm btn-outline-danger delete-btn">삭제</button>
      </td>`;
    // 아래 이벤트는 Starter 제공 코드입니다. 수정 및 삭제 동작 원리를 읽어 보세요.
    tr.querySelector(".edit-btn").addEventListener("click", function () {
      item.returned = !item.returned;
      render();
    });
    tr.querySelector(".delete-btn").addEventListener("click", function () {
      if (!confirm("삭제하시겠습니까?")) return;
      items = items.filter(function (current) { return current.id !== item.id; });
      render();
    });
    rows.appendChild(tr);
  });
  // TODO Q4-B: #summary 의 텍스트를 '총 N건의 분실물이 등록되어 있습니다.'로 변경


}

// TODO Q3-B: #itemForm 의 submit 이벤트 리스너 작성
// - 기본 제출 막기, 필수값 확인, 새 항목 생성 후 배열 추가
// - 등록 성공 시 reset(), render(), message 텍스트 출력

// TODO Q5-B: #searchInput 의 input 이벤트 리스너 작성
// - 입력한 키워드로 items 배열에서 물품명이 포함되는 항목만 조회
// - render(필터링된 배열) 호출, 대소문자 구분하지 않음

render();
