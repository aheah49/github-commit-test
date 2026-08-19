// 카드 데이터 정의
const SUITS = [
  { symbol: '♠', name: 'SPADES', colorClass: 'suit-black' },
  { symbol: '♥', name: 'HEARTS', colorClass: 'suit-red' },
  { symbol: '♦', name: 'DIAMONDS', colorClass: 'suit-red' },
  { symbol: '♣', name: 'CLUBS', colorClass: 'suit-black' }
];

const RANKS = [
  { label: 'A', name: 'ACE' },
  { label: '2', name: 'TWO' },
  { label: '3', name: 'THREE' },
  { label: '4', name: 'FOUR' },
  { label: '5', name: 'FIVE' },
  { label: '6', name: 'SIX' },
  { label: '7', name: 'SEVEN' },
  { label: '8', name: 'EIGHT' },
  { label: '9', name: 'NINE' },
  { label: '10', name: 'TEN' },
  { label: 'J', name: 'JACK' },
  { label: 'Q', name: 'QUEEN' },
  { label: 'K', name: 'KING' }
];

// 조커 및 특별 카드 옵션
const SPECIAL_CARDS = [
  { symbol: '★', rank: 'JOKER', name: 'RED JOKER', colorClass: 'suit-red' },
  { symbol: '✦', rank: 'JOKER', name: 'BLACK JOKER', colorClass: 'suit-black' },
  { symbol: '👑', rank: 'ACE', name: 'GOLDEN CROWN', colorClass: 'suit-gold' }
];

// 전체 덱 생성
function buildDeck() {
  const deck = [];

  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        symbol: suit.symbol,
        rank: rank.label,
        name: `${rank.name} OF ${suit.name}`,
        colorClass: suit.colorClass
      });
    }
  }

  // 스페셜 카드도 덱에 포함
  deck.push(...SPECIAL_CARDS);

  return deck;
}

const DECK = buildDeck();

// DOM 요소
const cardContainer = document.getElementById('card-container');
const drawBtn = document.getElementById('draw-btn');

// 랜덤 카드 선택 함수
function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * DECK.length);
  return DECK[randomIndex];
}

// 카드 렌더링 함수
function renderCard(cardData) {
  // 새 카드 HTML 생성
  const cardElement = document.createElement('div');
  cardElement.className = `card animate-draw ${cardData.colorClass}`;
  cardElement.id = 'card';

  cardElement.innerHTML = `
    <div class="card-face card-front">
      <div class="corner top">
        <span>${cardData.rank}</span>
        <span class="corner-suit">${cardData.symbol}</span>
      </div>
      
      <div class="center-symbol">
        <span class="large-suit">${cardData.symbol}</span>
        <span class="card-label">${cardData.name}</span>
      </div>
      
      <div class="corner bottom">
        <span>${cardData.rank}</span>
        <span class="corner-suit">${cardData.symbol}</span>
      </div>
    </div>
  `;

  // 기존 카드를 교체
  cardContainer.innerHTML = '';
  cardContainer.appendChild(cardElement);
}

// 버튼 클릭 이벤트 리스너
drawBtn.addEventListener('click', () => {
  const randomCard = getRandomCard();
  renderCard(randomCard);
});
