const calendarContainer = document.querySelector('.calendar-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const calendarTitle = document.querySelector('.calendar-title');
const calendarMain = document.getElementById('calendar-main');

let currentYear = 2023;
let currentMonth = 7; // JavaScript에서 월은 0부터 시작하므로 7은 8월을 나타냅니다.

function updateCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  calendarTitle.textContent = `${year}년 ${month + 1}월`;

  calendarMain.innerHTML = '';

  // 빈 칸 삽입
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    calendarMain.appendChild(emptyDay);
  }

  // 날짜 채우기
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    calendarMain.appendChild(dayElement);
  }
}

prevButton.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  updateCalendar(currentYear, currentMonth);
});

nextButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  updateCalendar(currentYear, currentMonth);
});

updateCalendar(currentYear, currentMonth);


