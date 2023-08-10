const openCalendarModal = () => {
    const calendar = document.querySelector(".calendar");
    calendar.classList.remove("invisible");
  }
  
  const closeCalendarModal = () => {
    const calendar = document.querySelector(".calendar");
    calendar.classList.add("invisible");
    calendar.innerHTML = "";
  }
  
  const calendarModal = () => {
    const calendar = document.querySelector(".calendar");
    calendar.innerHTML = `
      <div class="calendar-container">
        <header class="calendar-header">
            <button id="beforebtn" class="btn-cal prev">◀</button>
            <div class="calendar-month"></div>
            <button id="nextbtn" class="btn-cal next">▶</button>
        </header>
        <div class="calendar-wrapper">
            <table class="calendar-table">
                <thead class="calendar-thead">
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </thead>
                <tbody id="calendar-body" class="calendar-tbody">
                    
                </tbody>
            </table>
        </div>
        <footer class="calendar-footer">
            <button class="btn" onclick="closeCalendarModal();">확인</button>
            <button class="btn" onclick="closeCalendarModal();">닫기</button>
        </footer>
      </div>
    `;

    showCalendar();
  }