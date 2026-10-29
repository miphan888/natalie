/* Berry Ten / Number Garden
   Practice for break-apart addition and subtraction.
   The guide is one language at a time. */
'use strict';

const METHODS = [
  { id: 'bonds', order: 1, en: 'Ten Friends', vi: 'Bạn của 10', school: 'number bonds to 10', color: '#ffc44d', ink: '#241c16',
    kid: { en: 'What makes 10?', vi: 'Số nào thành 10?' },
    levels: [
      { en: 'See the frame. Partners 1–5.', vi: 'Có khung 10. Bạn của 1–5.' },
      { en: 'Partners 6–9.', vi: 'Bạn của 6–9.' },
      { en: 'No picture. Just the number.', vi: 'Không hình. Chỉ có số.' },
      { en: 'Three parts make 10.', vi: 'Ba phần thành 10.' }
    ] },
  { id: 'counton', order: 2, en: 'Count On', vi: 'Đếm tiếp', school: 'count on', color: '#3aa0e8', ink: '#fff',
    kid: { en: 'Start at the big number. Hop 1, 2, or 3.', vi: 'Bắt đầu từ số lớn. Nhảy 1, 2 hoặc 3.' },
    levels: [
      { en: 'Plus 1.', vi: 'Cộng 1.' },
      { en: 'Plus 2.', vi: 'Cộng 2.' },
      { en: 'Plus 3. Start at the big one.', vi: 'Cộng 3. Bắt đầu từ số lớn.' },
      { en: 'Mix. Still only 1, 2, or 3.', vi: 'Trộn. Vẫn chỉ 1, 2 hoặc 3.' }
    ] },
  { id: 'doubles', order: 3, en: 'Doubles', vi: 'Số đôi', school: 'doubles · near doubles', color: '#e23d5c', ink: '#fff',
    kid: { en: 'Same and same. Then one more.', vi: 'Bằng nhau. Rồi thêm một.' },
    levels: [
      { en: 'Doubles 1 to 5.', vi: 'Số đôi 1 đến 5.' },
      { en: 'Doubles 6 to 10.', vi: 'Số đôi 6 đến 10.' },
      { en: 'One more than a double.', vi: 'Hơn số đôi một.' },
      { en: 'One less than a double.', vi: 'Kém số đôi một.' }
    ] },
  { id: 'maketen', order: 4, en: 'Make a Ten', vi: 'Làm thành 10', school: 'make a ten · break apart', color: '#1f8a56', ink: '#fff', tag: { en: 'Core', vi: 'Gốc' },
    kid: { en: 'Break a number to make 10.', vi: 'Tách số để thành 10.' },
    levels: [
      { en: 'Plus 9. We fill the 1.', vi: 'Cộng 9. Ô “1” đã điền.' },
      { en: 'Plus 8 or 9. You break it.', vi: 'Cộng 8 hoặc 9. Con tự tách.' },
      { en: 'Plus 7, 8, or 9. Numbers only.', vi: 'Cộng 7, 8 hoặc 9. Chỉ có số.' },
      { en: 'Plus 6 to 9. Numbers only.', vi: 'Cộng 6 đến 9. Chỉ có số.' }
    ] },
  { id: 'taketen', order: 5, en: 'Take from Ten', vi: 'Lấy để chạm 10', school: 'decompose to subtract', color: '#6d4c9e', ink: '#fff',
    kid: { en: 'Take the ones first. Land on 10.', vi: 'Lấy phần đơn vị trước. Chạm 10.' },
    levels: [
      { en: 'We show the ones to take first.', vi: 'Đã chỉ phần đơn vị lấy trước.' },
      { en: 'You break it. Picture on.', vi: 'Con tự tách. Còn hình.' },
      { en: 'No picture.', vi: 'Không hình.' },
      { en: 'Harder numbers, 11 to 18.', vi: 'Số 11 đến 18, khó hơn.' }
    ] },
  { id: 'think', order: 6, en: 'Think Addition', vi: 'Nghĩ phép cộng', school: 'think addition', color: '#f08a3e', ink: '#241c16',
    kid: { en: 'Subtract by adding up.', vi: 'Trừ bằng cách cộng lên.' },
    levels: [
      { en: 'Missing part within 10.', vi: 'Thiếu một phần, trong 10.' },
      { en: 'Subtract from 11–18. We start the ten.', vi: 'Trừ số 11–18. Đã gợi ý tới 10.' },
      { en: 'You fill every box.', vi: 'Con điền mọi ô.' },
      { en: 'Same boxes. Less talk.', vi: 'Vẫn các ô đó. Ít lời hơn.' }
    ] },
  { id: 'friendly', order: 7, en: 'Friendly Fix', vi: 'Số thân thiện', school: 'compensation · friendly numbers', color: '#d4537e', ink: '#fff',
    kid: { en: 'Make 10, then give some back.', vi: 'Làm thành 10, rồi trả lại.' },
    levels: [
      { en: 'Plus 9. We show the 1.', vi: 'Cộng 9. Đã chỉ số 1.' },
      { en: 'Plus 9. You find the 1.', vi: 'Cộng 9. Con tìm số 1.' },
      { en: 'Plus 8. Give 2 back.', vi: 'Cộng 8. Trả lại 2.' },
      { en: 'Minus 9. Give 1 back.', vi: 'Trừ 9. Trả lại 1.' }
    ] },
  { id: 'place', order: 8, en: 'Break Apart', vi: 'Tách chục', school: 'break apart by place value', color: '#0f7f86', ink: '#fff', tag: { en: 'Stretch', vi: 'Nâng' },
    kid: { en: 'Add tens. Add ones. Put them together.', vi: 'Cộng chục. Cộng đơn vị. Ghép lại.' },
    levels: [
      { en: 'Tens only.', vi: 'Chỉ có chục.' },
      { en: 'The break is shown. You add.', vi: 'Đã tách sẵn. Con cộng.' },
      { en: 'You break and add.', vi: 'Con tự tách và cộng.' },
      { en: 'Subtract tens and ones. No trade.', vi: 'Trừ chục và đơn vị. Chưa mượn.' }
    ] },
  { id: 'mix', order: 9, en: 'Mix Garden', vi: 'Vườn trộn', school: 'choose a strategy', color: '#e2a325', ink: '#241c16', tag: { en: 'Review', vi: 'Ôn' },
    kid: { en: 'Use a smart way.', vi: 'Dùng một cách thông minh.' },
    levels: [
      { en: 'Friends, doubles, hops.', vi: 'Bạn của 10, số đôi, nhảy.' },
      { en: 'Make ten and doubles.', vi: 'Làm thành 10 và số đôi.' },
      { en: 'Subtract two ways.', vi: 'Hai cách trừ.' },
      { en: 'Stories. You pick the way.', vi: 'Chuyện nhỏ. Con chọn cách.' }
    ] }
];

const EXTRA = {
  daily: { id: 'daily', en: "Today's 5", vi: '5 quả hôm nay', school: 'a short mix', color: '#ffc44d', ink: '#241c16' }
};

const SIT = {
  bonds: { en: 'Ten is the friend every other strategy leans on.', vi: 'Số 10 là bạn mà mọi cách tính sau này đều dựa vào.' },
  counton: { en: 'Only hop 1, 2, or 3. Start at the bigger number.', vi: 'Chỉ nhảy 1, 2 hoặc 3. Bắt đầu từ số lớn hơn.' },
  doubles: { en: 'If you know 6+6, you know 6+7 and 7+6.', vi: 'Biết 6+6 thì biết luôn 6+7 và 7+6.' },
  maketen: { en: 'Break the other number so this one can become 10. The two parts are just a friendlier way to write the same number.', vi: 'Tách số kia để số này thành 10. Hai phần đó chỉ là cách viết lại cho dễ, vẫn là số cũ.' },
  taketen: { en: 'Do not take from the ones if they are too small. Take the ones first so you land on 10.', vi: 'Đừng lấy từ phần đơn vị nếu đơn vị nhỏ hơn. Lấy hết đơn vị trước để chạm 10.' },
  think: { en: 'Subtraction asks: what do I add to get there?', vi: 'Phép trừ hỏi: cộng thêm bao nhiêu thì tới?' },
  friendly: { en: 'Add 10, then give back what you added extra. For minus 9, you took 1 too many, so give it back.', vi: 'Cộng 10, rồi trả lại phần cộng thừa. Trừ 9 là lấy thừa 1, phải trả lại.' },
  place: { en: 'Tens with tens. Ones with ones. Then put the parts back together.', vi: 'Chục với chục. Đơn vị với đơn vị. Rồi ghép lại.' },
  mix: { en: 'More than one smart way can be right.', vi: 'Nhiều cách thông minh đều đúng.' }
};

const UI = {
  check: { en: 'Check', vi: 'Xem nào' },
  hint: { en: 'Hint', vi: 'Gợi ý' },
  fill: { en: 'Fill one box', vi: 'Điền giúp một ô' },
  next: { en: 'Next', vi: 'Tiếp' },
  garden: { en: 'Garden', vi: 'Vườn' },
  back: { en: 'Back', vi: 'Quay lại' },
  stay: { en: 'Stay', vi: 'Ở lại' },
  watch: { en: 'Watch Pip', vi: 'Xem Pip' },
  yourTurn: { en: 'Your turn', vi: 'Tới lượt con' },
  playSeed: { en: 'Play Seed', vi: 'Chơi màn Hạt' },
  parents: { en: 'Parent book', vi: 'Sách phụ huynh' },
  daily: { en: "Today's 5", vi: '5 quả hôm nay' },
  sound: { en: 'Sound', vi: 'Chuông' },
  read: { en: 'Read', vi: 'Đọc' },
  startHere: { en: 'Start here', vi: 'Bắt đầu' },
  leave: { en: 'Leave this round?', vi: 'Rời vòng này?' },
  leave2: { en: 'Stars are saved only when you finish.', vi: 'Sao chỉ được lưu khi chơi xong.' },
  typehint: { en: 'Or type the numbers.', vi: 'Hoặc gõ số.' },
  how: { en: 'Yellow box. Then the numbers.', vi: 'Ô vàng. Rồi chạm số.' },
  empty: { en: 'Fill the yellow box first.', vi: 'Điền ô vàng trước đã.' },
  locked: { en: 'Grow the one before this.', vi: 'Chơi màn trước đã.' },
  sitOn: { en: 'Parent note on', vi: 'Có lời phụ huynh' },
  sitOff: { en: 'Parent note off', vi: 'Tắt lời phụ huynh' },
  practice: { en: 'Practice together', vi: 'Luyện cùng con' },
  quiz: { en: 'Check yourself', vi: 'Tự kiểm' },
  again: { en: 'Play again', vi: 'Chơi lại' },
  nextLv: { en: 'Next level', vi: 'Màn sau' },
  unlock: { en: 'I am the grown-up. Open every level.', vi: 'Tôi là người lớn. Mở mọi màn.' },
  unlocked: { en: 'All levels are open.', vi: 'Mọi màn đã mở.' },
  reset: { en: 'Reset this garden', vi: 'Xóa vườn này' },
  resetYes: { en: 'Yes, erase stars', vi: 'Xóa sao' },
  hear: { en: 'Hear', vi: 'Nghe' },
  say: { en: 'Say this beside your child', vi: 'Câu nói khi ngồi cạnh con' },
  watchOut: { en: 'A mistake to watch', vi: 'Lỗi hay gặp' },
  idea: { en: 'The idea', vi: 'Ý chính' },
  example: { en: 'The same card your child sees', vi: 'Đúng thẻ con sẽ thấy' },
  doneDaily: { en: 'Done today', vi: 'Hôm nay xong' },
  about: { en: 'About 4 minutes', vi: 'Khoảng 4 phút' },
  tenPlay: { en: 'Ten games', vi: 'Trò thành 10' }
};

const YES = [
  { en: 'Yes!', vi: 'Đúng rồi!' },
  { en: 'Smart!', vi: 'Giỏi!' },
  { en: 'That works!', vi: 'Được đó!' },
  { en: 'Nice split!', vi: 'Tách hay!' }
];

const LEVEL_NAME = [
  { en: 'Seed', vi: 'Hạt' },
  { en: 'Sprout', vi: 'Mầm' },
  { en: 'Bloom', vi: 'Nở' },
  { en: 'Harvest', vi: 'Hái' }
];

const BOOK_IDS = ['how', 'bonds', 'counton', 'doubles', 'maketen', 'taketen', 'think', 'friendly', 'place', 'choose'];

let progress = {
  name: '', lang: 'en', sound: true, read: true, sit: false,
  stars: {}, fruit: 0, readCh: {}, quiz: {}, unlockAll: false, sawHow: false, daily: {},
  soroCols: 5, soroColor: 'black'
};

let state = {
  screen: 'home', method: 'bonds', level: 1, round: null, entries: {}, focus: null,
  bad: {}, shake: null, bubble: null, recapOn: false, leaveAsk: false, resetAsk: false,
  demo: false, quiz: null, chapter: 'how'
};

let timer = 0;
let demoGen = 0;
let audioCtx = null;
let spokenFor = '';

function t(x) {
  if (x == null) return '';
  if (typeof x === 'string') return x;
  return x[progress.lang] || x.en || '';
}
function ui(k) { return UI[k][progress.lang] || UI[k].en; }
function meta(id) { return METHODS.find(m => m.id === id) || EXTRA[id] || METHODS[0]; }
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}
function bi(en, vi) { return { en, vi }; }
function randInt(rng, lo, hi) {
  if (hi < lo) throw new Error('range ' + lo + '..' + hi);
  return lo + Math.floor(rng() * (hi - lo + 1));
}
function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t0 = Math.imul(a ^ a >>> 15, 1 | a);
    t0 = t0 + Math.imul(t0 ^ t0 >>> 7, 61 | t0) ^ t0;
    return ((t0 ^ t0 >>> 14) >>> 0) / 4294967296;
  };
}
function dateKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function todayLabel() {
  const d = new Date();
  try {
    return progress.lang === 'vi'
      ? d.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric' })
      : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch (e) { return dateKey(); }
}
function cleanName(s) { return String(s || '').replace(/[<>]/g, '').slice(0, 16); }

function S(id, expect, max, help, cap, opt) {
  return Object.assign({ slot: id, expect: expect, max: max, help: help, cap: cap || null, pre: false, role: '' }, opt || {});
}

function slotsOf(p) {
  const out = [];
  for (const row of p.rows) for (const tok of row) if (tok.slot) out.push(tok);
  return out;
}
function inputSlots(p) { return slotsOf(p).filter(s => !s.pre); }
function findSlot(p, id) {
  for (const row of p.rows) for (const tok of row) if (tok.slot === id) return tok;
  return null;
}
function blankEntries(p) {
  const e = {};
  slotsOf(p).forEach(s => { e[s.slot] = s.pre ? String(s.expect) : ''; });
  return e;
}
function firstEmpty(p, entries) {
  const s = inputSlots(p).find(x => !entries[x.slot]);
  return s ? s.slot : null;
}
function cur() { return state.round.problems[state.round.index]; }

function validate(p) {
  if (!p || !p.fact) throw new Error('no fact');
  if (!p.headline) throw new Error('headline');
  if (!p.visual || !p.visual.type) throw new Error('visual');
  if (!p.coach || !p.coach.en || !p.coach.vi) throw new Error('coach');
  if (!p.recap || !p.recap.en || !p.recap.vi) throw new Error('recap');
  if (!p.rows || !p.rows.length) throw new Error('rows');
  const f = p.fact;
  if (f.op === '+' && f.a + f.b !== f.answer) throw new Error('add ' + f.a + '+' + f.b + '=' + f.answer);
  if (f.op === '-' && f.a - f.b !== f.answer) throw new Error('sub ' + f.a + '-' + f.b);
  if (f.op === 'bond' && f.a + f.answer !== f.whole) throw new Error('bond');
  if (f.op === 'bond3' && f.shown[0] + f.shown[1] + f.answer !== f.whole) throw new Error('bond3');
  const ids = new Set();
  let answers = 0;
  const echoes = [];
  for (const row of p.rows) {
    for (const tok of row) {
      if (tok.echo) echoes.push(tok.echo);
      if (!tok.slot) continue;
      if (ids.has(tok.slot)) throw new Error('dup ' + tok.slot);
      ids.add(tok.slot);
      if (!Number.isInteger(tok.expect)) throw new Error('expect ' + tok.slot);
      if (tok.expect < 0) throw new Error('neg ' + tok.slot);
      if (!tok.help || !tok.help.en || !tok.help.vi) throw new Error('help ' + tok.slot);
      if (tok.role === 'answer') {
        answers++;
        if (tok.expect !== f.answer) throw new Error('answer slot ' + tok.expect + ' != ' + f.answer);
      }
    }
  }
  echoes.forEach(id => { if (!ids.has(id)) throw new Error('echo ' + id); });
  if (answers !== 1) throw new Error('answer roles ' + answers + ' ' + p.key);
  return p;
}

function problemBonds(level, rng, fixed) {
  if (level === 4 && !fixed) {
    const bank = [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 2, 6], [2, 3, 5], [2, 4, 4], [3, 3, 4], [1, 1, 8], [3, 4, 3], [2, 5, 3]];
    const parts = pick(rng, bank).slice();
    const hide = randInt(rng, 0, 2);
    const answer = parts[hide];
    const shown = parts.filter((_, i) => i !== hide);
    const tokens = [];
    parts.forEach((n, i) => {
      if (i) tokens.push({ t: '+' });
      if (i === hide) {
        tokens.push(S('ans', n, 1, bi('These three make 10. What is missing?', 'Ba số này thành 10. Thiếu số mấy?'), bi('missing', 'thiếu'), { role: 'answer' }));
      } else tokens.push({ t: String(n) });
    });
    tokens.push({ t: '= 10' });
    return validate({
      method: 'bonds', key: 'bonds4:' + parts.join(',') + ':h' + hide,
      fact: { op: 'bond3', shown: shown, answer: answer, whole: 10, a: shown[0], b: shown[1] },
      coach: bi('Three friends make 10. Fill the empty one.', 'Ba số bạn thành 10. Điền chỗ trống.'),
      recap: bi(parts.join(' + ') + ' = 10', parts.join(' + ') + ' = 10'),
      visual: { type: 'bond', whole: 10, part: shown[0], part2: shown[1] },
      headline: parts.map((n, i) => i === hide ? '?' : n).join(' + '),
      rows: [tokens]
    });
  }
  const part = fixed ? fixed.part : randInt(rng, level === 1 ? 1 : level === 2 ? 6 : 1, level === 1 ? 5 : 9);
  const ans = 10 - part;
  if (part < 1 || part > 9 || ans < 1) throw new Error('bond range');
  const bare = level >= 3;
  return validate({
    method: 'bonds', key: 'bonds:' + part,
    fact: { a: part, op: 'bond', b: ans, answer: ans, whole: 10 },
    coach: bi('How many more to make 10?', 'Cần thêm mấy để thành 10?'),
    recap: bi(part + ' + ' + ans + ' = 10', part + ' + ' + ans + ' = 10'),
    visual: { type: bare ? 'bond' : 'frame', n: part, total: 10, whole: 10, part: part },
    headline: part + ' + ? = 10',
    rows: [[
      { t: part + ' +' },
      S('ans', ans, 1, bi('10 take away ' + part + '.', '10 trừ ' + part + '.'), bi('friend', 'bạn'), { role: 'answer' }),
      { t: '= 10' }
    ]]
  });
}

function problemCount(level, rng, fixed) {
  let start, hops, smallFirst = false;
  if (fixed) {
    start = fixed.start; hops = fixed.hops; smallFirst = !!fixed.smallFirst;
  } else {
    hops = level === 1 ? 1 : level === 2 ? 2 : level === 3 ? 3 : randInt(rng, 1, 3);
    start = randInt(rng, level >= 3 ? 5 : 2, 20 - hops);
    if (level >= 3 && rng() < 0.5) smallFirst = true;
  }
  const ans = start + hops;
  if (ans > 20 || hops < 1 || hops > 3 || start < 0) throw new Error('count');
  const rows = [];
  if (level >= 3 || (fixed && fixed.askStart)) {
    rows.push([
      { b: bi('I start at', 'Bắt đầu ở') },
      S('start', start, 2, bi('Start at the bigger number.', 'Bắt đầu từ số lớn hơn.'), bi('start', 'bắt đầu'))
    ]);
  }
  rows.push([
    { b: bi('Hop ' + hops, 'Nhảy ' + hops) },
    S('ans', ans, 2, bi('Start at ' + start + '. Hop ' + hops + '.', 'Bắt đầu ở ' + start + '. Nhảy ' + hops + ' bước.'), bi('land', 'đáp'), { role: 'answer' })
  ]);
  return validate({
    method: 'counton', key: 'count:' + start + '+' + hops + (smallFirst ? 's' : ''),
    fact: { a: start, op: '+', b: hops, answer: ans },
    coach: smallFirst
      ? bi('The small number is written first. Start at ' + start + '.', 'Số nhỏ viết trước. Bắt đầu ở ' + start + '.')
      : bi('Start at ' + start + '. Hop ' + hops + '.', 'Bắt đầu ở ' + start + '. Nhảy ' + hops + '.'),
    recap: bi(start + ' + ' + hops + ' = ' + ans, start + ' + ' + hops + ' = ' + ans),
    visual: { type: 'hops', start: start, hops: hops },
    headline: smallFirst ? (hops + ' + ' + start) : (start + ' + ' + hops),
    rows: rows
  });
}

function flashDouble(n) {
  return validate({
    method: 'doubles', key: 'dbl:' + n,
    fact: { a: n, op: '+', b: n, answer: n * 2 },
    coach: bi('Same and same.', 'Hai bên bằng nhau.'),
    recap: bi(n + ' + ' + n + ' = ' + (n * 2), n + ' + ' + n + ' = ' + (n * 2)),
    visual: { type: 'pair', n: n, m: n },
    headline: n + ' + ' + n,
    rows: [[S('ans', n * 2, 2, bi('Two groups of ' + n + '.', 'Hai nhóm ' + n + '.'), bi('double', 'số đôi'), { role: 'answer' })]]
  });
}

function problemDoubles(level, rng, fixed) {
  if (fixed && fixed.a === fixed.b) return flashDouble(fixed.a);
  if (level <= 2 && !fixed) return flashDouble(randInt(rng, level === 1 ? 1 : 6, level === 1 ? 5 : 10));
  if (level === 3 || (fixed && level !== 4)) {
    const a = fixed ? Math.min(fixed.a, fixed.b) : randInt(rng, 3, 9);
    const b = a + 1;
    if (fixed && Math.abs(fixed.a - fixed.b) !== 1) throw new Error('not near');
    const dub = a * 2;
    const ans = a + b;
    if (dub + 1 !== ans) throw new Error('near');
    return validate({
      method: 'doubles', key: 'near+:' + a,
      fact: { a: a, op: '+', b: b, answer: ans },
      coach: bi('Double the smaller one, then one more.', 'Lấy số đôi của số nhỏ, rồi thêm 1.'),
      recap: bi(a + ' + ' + b + ' = ' + a + ' + ' + a + ' + 1 = ' + ans, a + ' + ' + b + ' = ' + a + ' + ' + a + ' + 1 = ' + ans),
      visual: { type: 'pair', n: a, m: b },
      headline: a + ' + ' + b,
      rows: [
        [{ t: a + ' + ' + a + ' =' }, S('dub', dub, 2, bi(a + ' + ' + a + ' is the double.', a + ' + ' + a + ' là số đôi.'), bi('double', 'số đôi'))],
        [{ echo: 'dub' }, { t: '+ 1 =' }, S('ans', ans, 2, bi('One more than ' + dub + '.', 'Hơn ' + dub + ' một.'), bi('one more', 'thêm 1'), { role: 'answer' })]
      ]
    });
  }
  const big = fixed ? Math.max(fixed.a, fixed.b) : randInt(rng, 4, 10);
  const small = big - 1;
  const dub = big * 2;
  const ans = big + small;
  if (dub - 1 !== ans) throw new Error('near-');
  return validate({
    method: 'doubles', key: 'near-:' + big,
    fact: { a: big, op: '+', b: small, answer: ans },
    coach: bi('Double the bigger one, then one less.', 'Lấy số đôi của số lớn, rồi bớt 1.'),
    recap: bi(big + ' + ' + small + ' = ' + big + ' + ' + big + ' − 1 = ' + ans, big + ' + ' + small + ' = ' + big + ' + ' + big + ' − 1 = ' + ans),
    visual: { type: 'pair', n: big, m: small },
    headline: small + ' + ' + big,
    rows: [
      [{ t: big + ' + ' + big + ' =' }, S('dub', dub, 2, bi(big + ' + ' + big + ' is the double.', big + ' + ' + big + ' là số đôi.'), bi('double', 'số đôi'))],
      [{ echo: 'dub' }, { t: '− 1 =' }, S('ans', ans, 2, bi('One less than ' + dub + '.', 'Kém ' + dub + ' một.'), bi('one less', 'bớt 1'), { role: 'answer' })]
    ]
  });
}

function problemMake(level, rng, fixed) {
  let keep, broken;
  if (fixed) { keep = fixed.keep; broken = fixed.broken; }
  else {
    const keeps = [[9], [8, 9], [7, 8, 9], [6, 7, 8, 9]][level - 1];
    keep = pick(rng, keeps);
    broken = randInt(rng, (10 - keep) + 1, 9);
  }
  const need = 10 - keep;
  const rest = broken - need;
  const ans = keep + broken;
  if (!(need >= 1 && rest >= 1 && need + rest === broken && ans <= 20)) throw new Error('make');
  const pre = level === 1;
  return validate({
    method: 'maketen', key: 'make:' + keep + '+' + broken,
    fact: { a: keep, op: '+', b: broken, answer: ans },
    coach: bi(keep + ' needs ' + need + ' more to make 10. Break ' + broken + '.', keep + ' cần thêm ' + need + ' để thành 10. Tách ' + broken + '.'),
    recap: bi(keep + ' + ' + broken + ' = ' + keep + ' + ' + need + ' + ' + rest + ' = 10 + ' + rest + ' = ' + ans, keep + ' + ' + broken + ' = ' + keep + ' + ' + need + ' + ' + rest + ' = 10 + ' + rest + ' = ' + ans),
    visual: level >= 3 ? { type: 'none' } : { type: 'make', keep: keep, broken: broken, hint: level === 1 },
    headline: keep + ' + ' + broken,
    rows: [
      [
        { t: broken + ' =' },
        S('bridge', need, 1, bi(keep + ' needs ' + need + ' to make 10.', keep + ' cần ' + need + ' để thành 10.'), bi('to 10', 'thành 10'), { pre: pre }),
        { t: '+' },
        S('rest', rest, 1, bi(broken + ' take away ' + need + ' is left.', broken + ' trừ ' + need + ' còn lại.'), bi('left', 'còn'))
      ],
      [
        { t: keep + ' +' }, { echo: 'bridge' }, { t: '=' },
        S('ten', 10, 2, bi(keep + ' + ' + need + ' = 10.', keep + ' + ' + need + ' = 10.'), bi('ten', 'mười'), { pre: pre })
      ],
      [
        { t: '10 +' }, { echo: 'rest' }, { t: '=' },
        S('ans', ans, 2, bi('10 plus what is left.', '10 cộng phần còn lại.'), bi('all', 'cả'), { role: 'answer' })
      ]
    ]
  });
}

function problemTake(level, rng, fixed) {
  let minu, sub;
  if (fixed) { minu = fixed.minu; sub = fixed.sub; }
  else if (level === 1) {
    minu = randInt(rng, 12, 16);
    const ones0 = minu - 10;
    sub = randInt(rng, ones0 + 1, Math.min(9, ones0 + 3, minu - 1));
  } else {
    minu = randInt(rng, 11, 18);
    const ones0 = minu - 10;
    sub = randInt(rng, ones0 + 1, Math.min(9, minu - 1));
  }
  const ones = minu - 10;
  const rest = sub - ones;
  const ans = minu - sub;
  if (!(ones >= 1 && rest >= 1 && ones + rest === sub && minu - ones === 10 && 10 - rest === ans)) throw new Error('take');
  const pre = level === 1;
  const bare = level >= 3;
  return validate({
    method: 'taketen', key: 'take:' + minu + '-' + sub,
    fact: { a: minu, op: '-', b: sub, answer: ans },
    coach: bi('Take the ' + ones + ' ones first so you land on 10.', 'Lấy ' + ones + ' đơn vị trước để chạm 10.'),
    recap: bi(minu + ' − ' + sub + ' = ' + minu + ' − ' + ones + ' − ' + rest + ' = 10 − ' + rest + ' = ' + ans, minu + ' − ' + sub + ' = ' + minu + ' − ' + ones + ' − ' + rest + ' = 10 − ' + rest + ' = ' + ans),
    visual: { type: 'teen', n: minu, ones: ones, hint: level <= 2 && !bare },
    headline: minu + ' − ' + sub,
    rows: [
      [
        { t: sub + ' =' },
        S('bridge', ones, 1, bi('How many ones are in ' + minu + '?', minu + ' có mấy đơn vị?'), bi('ones', 'đơn vị'), { pre: pre }),
        { t: '+' },
        S('rest', rest, 1, bi(sub + ' − ' + ones + ' is still to take.', sub + ' − ' + ones + ' còn phải lấy.'), bi('left', 'còn'))
      ],
      [
        { t: minu + ' −' }, { echo: 'bridge' }, { t: '=' },
        S('ten', 10, 2, bi(minu + ' minus its ones lands on 10.', minu + ' trừ hết đơn vị thì chạm 10.'), bi('land', 'chạm'), { pre: pre })
      ],
      [
        { t: '10 −' }, { echo: 'rest' }, { t: '=' },
        S('ans', ans, 2, bi('10 minus what is left.', '10 trừ phần còn lại.'), bi('left', 'còn lại'), { role: 'answer' })
      ]
    ]
  });
}

function problemThink(level, rng, fixed) {
  if (level === 1 && !fixed) {
    const whole = randInt(rng, 6, 10);
    const part = randInt(rng, 2, whole - 2);
    const ans = whole - part;
    return validate({
      method: 'think', key: 'think10:' + whole + '-' + part,
      fact: { a: whole, op: '-', b: part, answer: ans },
      coach: bi(part + ' plus what makes ' + whole + '?', part + ' cộng mấy thì thành ' + whole + '?'),
      recap: bi(part + ' + ' + ans + ' = ' + whole + ', so ' + whole + ' − ' + part + ' = ' + ans, part + ' + ' + ans + ' = ' + whole + ', vậy ' + whole + ' − ' + part + ' = ' + ans),
      visual: { type: 'bond', whole: whole, part: part },
      headline: whole + ' − ' + part,
      rows: [[
        { t: part + ' +' },
        S('ans', ans, 2, bi('What is missing to make ' + whole + '?', 'Thiếu mấy để thành ' + whole + '?'), bi('missing', 'thiếu'), { role: 'answer' }),
        { t: '= ' + whole }
      ]]
    });
  }
  let minu, sub;
  if (fixed) { minu = fixed.minu; sub = fixed.sub; }
  else {
    sub = randInt(rng, 6, 9);
    minu = randInt(rng, 11, Math.min(18, 10 + sub));
  }
  const bridge = 10 - sub;
  const rest = minu - 10;
  const ans = bridge + rest;
  if (ans !== minu - sub || bridge < 1 || rest < 1) throw new Error('think');
  const pre = level === 2;
  const quiet = level >= 4;
  return validate({
    method: 'think', key: 'think:' + minu + '-' + sub,
    fact: { a: minu, op: '-', b: sub, answer: ans },
    coach: quiet
      ? bi('Fill the boxes.', 'Điền các ô.')
      : bi(minu + ' − ' + sub + ' asks: ' + sub + ' plus what makes ' + minu + '?', minu + ' − ' + sub + ' hỏi: ' + sub + ' cộng mấy bằng ' + minu + '?'),
    recap: bi(sub + ' + ' + bridge + ' = 10, 10 + ' + rest + ' = ' + minu + ', so the missing part is ' + ans, sub + ' + ' + bridge + ' = 10, 10 + ' + rest + ' = ' + minu + ', vậy phần thiếu là ' + ans),
    visual: { type: 'bond', whole: minu, part: sub },
    headline: minu + ' − ' + sub,
    rows: [
      [
        { t: sub + ' +' },
        S('bridge', bridge, 1, bi(sub + ' needs how many to make 10?', sub + ' cần mấy để thành 10?'), bi('to 10', 'thành 10'), { pre: pre }),
        { t: '= 10' }
      ],
      [
        { t: '10 +' },
        S('rest', rest, 1, bi('10 plus what makes ' + minu + '?', '10 cộng mấy thành ' + minu + '?'), bi('more', 'thêm')),
        { t: '= ' + minu }
      ],
      [
        { echo: 'bridge' }, { t: '+' }, { echo: 'rest' }, { t: '=' },
        S('ans', ans, 2, bi('Add the two parts you found.', 'Cộng hai phần vừa tìm.'), bi('missing', 'thiếu'), { role: 'answer' })
      ]
    ]
  });
}

function problemFriendly(level, rng, fixed) {
  if ((level === 4 && !fixed) || (fixed && fixed.op === '-')) {
    const minu = fixed ? fixed.left : randInt(rng, 12, 18);
    const almost = minu - 10;
    const ans = minu - 9;
    if (almost + 1 !== ans || almost < 1) throw new Error('fsub');
    return validate({
      method: 'friendly', key: 'fsub:' + minu,
      fact: { a: minu, op: '-', b: 9, answer: ans },
      coach: bi('Take 10. You took 1 too many. Give it back.', 'Lấy 10. Lấy thừa 1. Trả lại.'),
      recap: bi(minu + ' − 9 = ' + minu + ' − 10 + 1 = ' + ans, minu + ' − 9 = ' + minu + ' − 10 + 1 = ' + ans),
      visual: { type: 'friendly', n: 9, bump: 1, op: '-', showBump: true },
      headline: minu + ' − 9',
      rows: [
        [{ t: minu + ' − 10 =' }, S('almost', almost, 2, bi(minu + ' minus 10.', minu + ' trừ 10.'), bi('take 10', 'lấy 10'))],
        [{ b: bi('Give 1 back', 'Trả lại 1') }, { echo: 'almost' }, { t: '+ 1 =' }, S('ans', ans, 2, bi('Add the 1 you took extra.', 'Cộng lại 1 vừa lấy thừa.'), bi('back', 'trả'), { role: 'answer' })]
      ]
    });
  }
  const n = fixed ? fixed.n : (level === 3 ? 8 : 9);
  const left = fixed ? fixed.left : randInt(rng, 4, 9);
  const bump = 10 - n;
  const sum10 = left + 10;
  const ans = left + n;
  if (sum10 - bump !== ans || bump < 1) throw new Error('fadd');
  const pre = level === 1;
  return validate({
    method: 'friendly', key: 'fadd:' + left + '+' + n,
    fact: { a: left, op: '+', b: n, answer: ans },
    coach: bi(n + ' is ' + bump + ' away from 10. Add 10, then give ' + bump + ' back.', n + ' cách 10 đúng ' + bump + '. Cộng 10, rồi trả ' + bump + '.'),
    recap: bi(left + ' + ' + n + ' = ' + left + ' + 10 − ' + bump + ' = ' + ans, left + ' + ' + n + ' = ' + left + ' + 10 − ' + bump + ' = ' + ans),
    visual: { type: 'friendly', n: n, bump: bump, op: '+', showBump: level === 1 },
    headline: left + ' + ' + n,
    rows: [
      [
        { t: n + ' +' },
        S('bump', bump, 1, bi(n + ' needs ' + bump + ' to make 10.', n + ' cần ' + bump + ' để thành 10.'), bi('to 10', 'thành 10'), { pre: pre }),
        { t: '= 10' }
      ],
      [
        { t: left + ' + 10 =' },
        S('sum10', sum10, 2, bi(left + ' plus 10.', left + ' cộng 10.'), bi('add 10', 'cộng 10'))
      ],
      [
        { echo: 'sum10' }, { t: '−' }, { echo: 'bump' }, { t: '=' },
        S('ans', ans, 2, bi('Give back the extra ' + bump + '.', 'Trả lại ' + bump + ' vừa cộng thừa.'), bi('give back', 'trả lại'), { role: 'answer' })
      ]
    ]
  });
}

function problemPlace(level, rng, fixed) {
  if (level === 1 && !fixed) {
    const aT = randInt(rng, 1, 4);
    const bT = randInt(rng, 1, 4);
    const a = aT * 10, b = bT * 10, ans = a + b;
    return validate({
      method: 'place', key: 'pt:' + a + '+' + b,
      fact: { a: a, op: '+', b: b, answer: ans },
      coach: bi('Add the tens. Write the whole number. ' + aT + ' tens is ' + a + ', not ' + aT + '.', 'Cộng chục. Viết cả số. ' + aT + ' chục là ' + a + ', không phải ' + aT + '.'),
      recap: bi(a + ' + ' + b + ' = ' + ans, a + ' + ' + b + ' = ' + ans),
      visual: { type: 'rods', a: a, b: b, op: '+' },
      headline: a + ' + ' + b,
      rows: [[
        { b: bi(aT + ' tens + ' + bT + ' tens =', aT + ' chục + ' + bT + ' chục =') },
        S('ans', ans, 2, bi('Add the tens as whole numbers.', 'Cộng chục thành số đủ.'), bi('how many', 'là bao nhiêu'), { role: 'answer' })
      ]]
    });
  }
  if (level === 4 && !fixed) {
    const aT = randInt(rng, 3, 8);
    const bT = randInt(rng, 1, aT - 1);
    const aO = randInt(rng, 2, 9);
    const bO = randInt(rng, 1, aO - 1);
    const a = aT * 10 + aO, b = bT * 10 + bO, ans = a - b;
    const tens = (aT - bT) * 10, ones = aO - bO;
    if (tens + ones !== ans || tens < 10 || ones < 1) throw new Error('psub');
    return validate({
      method: 'place', key: 'ps:' + a + '-' + b,
      fact: { a: a, op: '-', b: b, answer: ans },
      coach: bi('Subtract tens. Subtract ones. The ones are big enough. No trade.', 'Trừ chục. Trừ đơn vị. Đơn vị đủ lớn. Chưa phải mượn.'),
      recap: bi(a + ' − ' + b + ' = ' + tens + ' + ' + ones + ' = ' + ans, a + ' − ' + b + ' = ' + tens + ' + ' + ones + ' = ' + ans),
      visual: { type: 'rods', a: a, b: b, op: '−' },
      headline: a + ' − ' + b,
      rows: [
        [{ b: bi(a + ' = ' + (aT * 10) + ' + ' + aO, a + ' = ' + (aT * 10) + ' + ' + aO) }],
        [{ b: bi(b + ' = ' + (bT * 10) + ' + ' + bO, b + ' = ' + (bT * 10) + ' + ' + bO) }],
        [{ t: (aT * 10) + ' − ' + (bT * 10) + ' =' }, S('tens', tens, 2, bi('Subtract the tens.', 'Trừ phần chục.'), bi('tens', 'chục'))],
        [{ t: aO + ' − ' + bO + ' =' }, S('ones', ones, 1, bi('Subtract the ones.', 'Trừ phần đơn vị.'), bi('ones', 'đơn vị'))],
        [{ echo: 'tens' }, { t: '+' }, { echo: 'ones' }, { t: '=' }, S('ans', ans, 2, bi('Put the parts together.', 'Ghép hai phần lại.'), bi('all', 'cả'), { role: 'answer' })]
      ]
    });
  }
  let a, b, aT, aO, bT, bO;
  if (fixed) {
    a = fixed.a; b = fixed.b;
    aT = Math.floor(a / 10); aO = a % 10; bT = Math.floor(b / 10); bO = b % 10;
  } else {
    aT = randInt(rng, 1, 4); bT = randInt(rng, 1, 4);
    aO = randInt(rng, 1, 4); bO = randInt(rng, 1, 4);
    a = aT * 10 + aO; b = bT * 10 + bO;
  }
  const tens = (aT + bT) * 10, ones = aO + bO, ans = a + b;
  if (ones >= 10 || ones < 1 || tens + ones !== ans) throw new Error('padd');
  const open = level >= 3;
  const rows = [];
  if (open) {
    rows.push([
      { t: a + ' =' },
      S('aT', aT * 10, 2, bi('How many tens in ' + a + '? ' + aT + ' tens is ' + (aT * 10) + '.', a + ' có mấy chục? ' + aT + ' chục là ' + (aT * 10) + '.'), bi('tens', 'chục')),
      { t: '+' },
      S('aO', aO, 1, bi('The ones in ' + a + ' are ' + aO + '.', 'Đơn vị của ' + a + ' là ' + aO + '.'), bi('ones', 'đơn vị'))
    ]);
    rows.push([
      { t: b + ' =' },
      S('bT', bT * 10, 2, bi(bT + ' tens is ' + (bT * 10) + '.', bT + ' chục là ' + (bT * 10) + '.'), bi('tens', 'chục')),
      { t: '+' },
      S('bO', bO, 1, bi('The ones are ' + bO + '.', 'Đơn vị là ' + bO + '.'), bi('ones', 'đơn vị'))
    ]);
  } else {
    rows.push([{ b: bi(a + ' = ' + (aT * 10) + ' + ' + aO, a + ' = ' + (aT * 10) + ' + ' + aO) }]);
    rows.push([{ b: bi(b + ' = ' + (bT * 10) + ' + ' + bO, b + ' = ' + (bT * 10) + ' + ' + bO) }]);
  }
  rows.push([{ t: (aT * 10) + ' + ' + (bT * 10) + ' =' }, S('tens', tens, 2, bi('Add the tens.', 'Cộng phần chục.'), bi('tens', 'chục'))]);
  rows.push([{ t: aO + ' + ' + bO + ' =' }, S('ones', ones, 1, bi('Add the ones.', 'Cộng phần đơn vị.'), bi('ones', 'đơn vị'))]);
  rows.push([{ echo: 'tens' }, { t: '+' }, { echo: 'ones' }, { t: '=' }, S('ans', ans, 2, bi('Put them together.', 'Ghép lại.'), bi('all', 'cả'), { role: 'answer' })]);
  return validate({
    method: 'place', key: 'pa:' + a + '+' + b + (open ? 'o' : ''),
    fact: { a: a, op: '+', b: b, answer: ans },
    coach: bi('Break into tens and ones. Add each part.', 'Tách chục và đơn vị. Cộng từng phần.'),
    recap: bi(a + ' + ' + b + ' = ' + tens + ' + ' + ones + ' = ' + ans, a + ' + ' + b + ' = ' + tens + ' + ' + ones + ' = ' + ans),
    visual: { type: 'rods', a: a, b: b, op: '+' },
    headline: a + ' + ' + b,
    rows: rows
  });
}

function storyFor(p) {
  const f = p.fact;
  if (!f || (f.op !== '+' && f.op !== '-')) return null;
  if (f.op === '+') {
    return bi('Pip has ' + f.a + ' berries and gets ' + f.b + ' more.', 'Pip có ' + f.a + ' quả, được thêm ' + f.b + ' quả.');
  }
  return bi('Pip had ' + f.a + ' berries. ' + f.b + ' were eaten.', 'Pip có ' + f.a + ' quả. Ăn mất ' + f.b + ' quả.');
}

function problemMix(level, rng) {
  const table = {
    1: [['bonds', 1], ['doubles', 1], ['counton', 1], ['bonds', 2]],
    2: [['maketen', 2], ['doubles', 3], ['bonds', 3], ['friendly', 1]],
    3: [['taketen', 2], ['think', 3], ['maketen', 3], ['counton', 3]],
    4: [['friendly', 2], ['place', 2], ['taketen', 3], ['maketen', 4], ['think', 3]]
  };
  const spec = pick(rng, table[level]);
  const p = build(spec[0], spec[1], rng);
  p.key = 'mix:' + p.key;
  if (level === 4) p.story = storyFor(p);
  return p;
}

function build(method, level, rng, fixed) {
  rng = rng || Math.random;
  if (method === 'bonds') return problemBonds(level, rng, fixed);
  if (method === 'counton') return problemCount(level, rng, fixed);
  if (method === 'doubles') return problemDoubles(level, rng, fixed);
  if (method === 'maketen') return problemMake(level, rng, fixed);
  if (method === 'taketen') return problemTake(level, rng, fixed);
  if (method === 'think') return problemThink(level, rng, fixed);
  if (method === 'friendly') return problemFriendly(level, rng, fixed);
  if (method === 'place') return problemPlace(level, rng, fixed);
  if (method === 'mix') return problemMix(level, rng);
  throw new Error('method ' + method);
}

function demoProblem(id) {
  const map = {
    bonds: () => problemBonds(2, Math.random, { part: 7 }),
    counton: () => problemCount(2, Math.random, { start: 9, hops: 2 }),
    doubles: () => problemDoubles(3, Math.random, { a: 6, b: 7 }),
    maketen: () => problemMake(2, Math.random, { keep: 8, broken: 5 }),
    taketen: () => problemTake(2, Math.random, { minu: 14, sub: 6 }),
    think: () => problemThink(3, Math.random, { minu: 13, sub: 8 }),
    friendly: () => problemFriendly(2, Math.random, { left: 6, n: 9, op: '+' }),
    place: () => problemPlace(2, Math.random, { a: 24, b: 13 }),
    mix: () => problemMake(2, Math.random, { keep: 8, broken: 5 })
  };
  return map[id]();
}

function roundSize(method, level) {
  if (method === 'daily') return 5;
  if (method === 'place' && level >= 3) return 4;
  if (method === 'bonds' && level === 1) return 5;
  if (method === 'bonds' && level === 2) return 4;
  if (method === 'doubles' && level <= 2) return 5;
  return 6;
}

function buildRound(method, level, rng) {
  const n = roundSize(method, level);
  const seen = new Set();
  const out = [];
  let guard = 0;
  while (out.length < n && guard++ < 80) {
    let p;
    try { p = build(method, level, rng || Math.random); }
    catch (e) { continue; }
    if (seen.has(p.key)) continue;
    seen.add(p.key);
    out.push(p);
  }
  return out;
}

function buildDaily(rng) {
  const specs = [['bonds', 2], ['doubles', 1], ['counton', 2], ['maketen', 1], ['friendly', 1]];
  return specs.map(s => build(s[0], s[1], rng));
}

function selfTest() {
  const errors = [];
  function check(label, fn) {
    try { fn(); }
    catch (e) { errors.push(label + ': ' + e.message); }
  }
  const rng = mulberry32(20261028);
  ['bonds', 'counton', 'doubles', 'maketen', 'taketen', 'think', 'friendly', 'place', 'mix'].forEach(id => {
    for (let level = 1; level <= 4; level++) {
      for (let i = 0; i < 20; i++) {
        check(id + ' L' + level + ' #' + i, () => validate(build(id, level, rng)));
      }
    }
  });
  ['bonds', 'counton', 'doubles', 'maketen', 'taketen', 'think', 'friendly', 'place'].forEach(id => {
    check('demo ' + id, () => validate(demoProblem(id)));
  });
  check('daily', () => {
    const ps = buildDaily(mulberry32(20261028));
    if (ps.length !== 5) throw new Error('len ' + ps.length);
    ps.forEach(validate);
  });
  check('round', () => {
    const ps = buildRound('maketen', 2, mulberry32(3));
    if (ps.length < 4) throw new Error('short ' + ps.length);
  });
  return errors;
}

function save() {
  try { localStorage.setItem('berryten-v1', JSON.stringify(progress)); } catch (e) {}
}
function load() {
  try {
    const raw = localStorage.getItem('berryten-v1');
    if (raw) progress = Object.assign(progress, JSON.parse(raw));
  } catch (e) {}
  progress.stars = progress.stars || {};
  progress.daily = progress.daily || {};
  progress.readCh = progress.readCh || {};
  progress.quiz = progress.quiz || {};
  if (progress.soroColsDefault !== '5') {
    progress.soroCols = 5;
    progress.soroColsDefault = '5';
    save();
  }
  if ([3, 5, 7, 9, 13].indexOf(Number(progress.soroCols)) < 0) progress.soroCols = 5;
  if (progress.langDefault !== 'en') {
    progress.lang = 'en';
    progress.langDefault = 'en';
    save();
  }
  if (progress.lang !== 'vi') progress.lang = 'en';
}
function unlocked(method, level) {
  if (progress.unlockAll) return true;
  if (level <= 1) return true;
  return (progress.stars[method + '-' + (level - 1)] || 0) >= 1;
}
function starsFor(method) {
  let n = 0;
  for (let l = 1; l <= 4; l++) n += progress.stars[method + '-' + l] || 0;
  return n;
}
function starStr(n) { return '★'.repeat(n) + '☆'.repeat(3 - n); }
function starCount(wrong, hints) {
  if (wrong === 0 && hints === 0) return 3;
  if (wrong + hints <= 2) return 2;
  return 1;
}

function ctx() {
  if (typeof window === 'undefined') return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!audioCtx) audioCtx = new AC();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function beep(freq, dur, type) {
  if (!progress.sound) return;
  const c = ctx();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type || 'sine';
  o.frequency.value = freq;
  g.gain.value = 0.05;
  o.connect(g); g.connect(c.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  o.stop(c.currentTime + dur);
}
function chime() {
  beep(523, 0.12, 'sine');
  setTimeout(() => beep(659, 0.12, 'sine'), 90);
  setTimeout(() => beep(784, 0.18, 'sine'), 180);
}
function stopSpeak() {
  try { if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel(); } catch (e) {}
}
function speak(text, lang, rate, pitch) {
  if (typeof speechSynthesis === 'undefined' || !text) return;
  stopSpeak();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
  u.rate = rate || 0.92;
  u.pitch = pitch || 1;
  try {
    const voices = speechSynthesis.getVoices();
    const want = lang === 'vi' ? 'vi' : 'en';
    const v = voices.find(x => (x.lang || '').toLowerCase().startsWith(want));
    if (v) u.voice = v;
  } catch (e) {}
  speechSynthesis.speak(u);
}

function bothHTML(obj) {
  if (!obj) return '';
  return '<div class="both"><p>' + esc(t(obj)) + '</p></div>';
}
function speakers(obj) {
  if (!obj) return '';
  const lang = progress.lang === 'vi' ? 'vi' : 'en';
  const label = lang === 'vi' ? 'Nghe' : 'Hear';
  return '<span class="spks"><button type="button" class="spk" data-act="speak" data-lang="' + lang + '" data-text="' + esc(obj[lang] || obj.en || '') + '">' + label + '</button></span>';
}
function schoolOf(m) {
  if (!m) return '';
  const vi = {
    bonds: 'bạn của 10',
    counton: 'đếm tiếp',
    doubles: 'số đôi · gần đôi',
    maketen: 'làm thành 10 · tách số',
    taketen: 'tách số để trừ',
    think: 'nghĩ phép cộng',
    friendly: 'bù số cho dễ',
    place: 'tách chục và đơn vị',
    mix: 'chọn một cách',
    daily: 'một vòng ngắn'
  };
  if (progress.lang === 'vi') return vi[m.id] || '';
  if (m.id === 'maketen') return 'make a ten · break apart';
  if (m.id === 'friendly') return 'compensation · friendly numbers';
  return m.school || '';
}

function heartLogo() {
  return '<span class="heart-wrap"><img class="heart-logo" src="heart-logo.png?v=2" alt=""></span>';
}
function pipSVG(mood) {
  const mouth = mood === 'oops'
    ? 'M33 54 Q40 49 47 54'
    : mood === 'wow'
      ? 'M32 52 Q40 60 48 52'
      : 'M33 53 Q40 59 47 53';
  const pupil = mood === 'wow' ? 3.6 : 3.1;
  return '<svg viewBox="0 0 80 80" class="pip" aria-hidden="true">' +
    '<ellipse cx="40" cy="72" rx="16" ry="3.5" fill="#000" opacity=".12"/>' +
    '<circle cx="40" cy="44" r="26" fill="#ff4f86"/>' +
    '<circle cx="33" cy="36" r="14" fill="#ff9ab8" opacity=".55"/>' +
    '<circle cx="40" cy="44" r="26" fill="none" stroke="#fff" stroke-width="3"/>' +
    '<ellipse cx="40" cy="52" rx="13" ry="9" fill="#ffe4ee"/>' +
    '<path d="M24 22 C16 10 32 8 34 20 C28 14 24 18 24 22 Z" fill="#3dcb6e" stroke="#fff" stroke-width="1.6"/>' +
    '<path d="M46 18 q9 -12 16 0 q-7 3 -8 9 q-4 -4 -8 -9 Z" fill="#ffd0e6" stroke="#fff" stroke-width="1.3"/>' +
    '<circle cx="54" cy="20" r="2.4" fill="#fff"/>' +
    '<ellipse cx="31" cy="42" rx="6.2" ry="7.2" fill="#fff"/>' +
    '<ellipse cx="49" cy="42" rx="6.2" ry="7.2" fill="#fff"/>' +
    '<circle cx="32.2" cy="43" r="' + pupil + '" fill="#3a2458"/>' +
    '<circle cx="50.2" cy="43" r="' + pupil + '" fill="#3a2458"/>' +
    '<circle cx="33.6" cy="41.2" r="1.4" fill="#fff"/>' +
    '<circle cx="51.6" cy="41.2" r="1.4" fill="#fff"/>' +
    '<ellipse cx="20" cy="50" rx="4.2" ry="2.5" fill="#ff9bb8"/>' +
    '<ellipse cx="60" cy="50" rx="4.2" ry="2.5" fill="#ff9bb8"/>' +
    '<path d="' + mouth + '" fill="none" stroke="#7a2048" stroke-width="2.3" stroke-linecap="round"/>' +
    '</svg>';
}
function plantSVG(stage) {
  const pot = '<path d="M8 34 h36 l-4 14 h-28 z" fill="#f0d7ad" stroke="#241c16" stroke-width="2"/><ellipse cx="26" cy="34" rx="18" ry="4.5" fill="#e7c49a" stroke="#241c16" stroke-width="2"/>';
  const seed = stage === 0 ? '<ellipse cx="26" cy="31" rx="7" ry="4" fill="#6b3e1e" stroke="#241c16" stroke-width="1.4"/>' : '';
  const stem = stage >= 1 ? '<path d="M26 33 C26 22 22 16 27 10" fill="none" stroke="#1f8a56" stroke-width="3.5" stroke-linecap="round"/>' : '';
  const leaf = stage >= 2 ? '<ellipse cx="16" cy="22" rx="9" ry="4.5" fill="#2f9e6b" stroke="#241c16" transform="rotate(-28 16 22)"/>' : '';
  const bloom = stage === 3 ? '<circle cx="28" cy="10" r="6" fill="#ffc44d" stroke="#241c16" stroke-width="1.6"/>' : '';
  const fruit = stage >= 4 ? '<circle cx="28" cy="10" r="6.5" fill="#e23d5c" stroke="#241c16" stroke-width="1.6"/>' : '';
  return '<svg viewBox="0 0 52 52" class="plant" aria-hidden="true">' + pot + seed + stem + leaf + bloom + fruit + '</svg>';
}
function plantStage(n) {
  if (n >= 12) return 4;
  if (n >= 8) return 3;
  if (n >= 4) return 2;
  if (n >= 1) return 1;
  return 0;
}

function frameHTML(n) {
  let cells = '';
  for (let i = 0; i < 10; i++) cells += '<i class="cell ' + (i < n ? 'on' : '') + '"></i>';
  return '<div class="ten">' + cells + '</div>';
}
function makeHTML(v) {
  let cells = '';
  for (let i = 0; i < 10; i++) cells += '<i class="cell ' + (i < v.keep ? 'on' : '') + '"></i>';
  let loose = '';
  const need = 10 - v.keep;
  for (let i = 0; i < v.broken; i++) loose += '<i class="berry ' + (v.hint && i < need ? 'hop' : '') + '"></i>';
  return '<div class="make"><div class="ten">' + cells + '</div><div class="opbig">+</div><div class="berries">' + loose + '</div></div>';
}
function teenHTML(v) {
  let cells = '';
  for (let i = 0; i < 10; i++) cells += '<i class="cell on"></i>';
  let ones = '';
  for (let i = 0; i < v.ones; i++) ones += '<i class="berry hop"></i>';
  return '<div class="make"><div class="ten">' + cells + '</div><div class="berries">' + ones + '</div></div>';
}
function diceHTML(n) {
  if (n > 6) {
    let cells = '';
    for (let i = 0; i < 10; i++) cells += '<i class="cell ' + (i < n ? 'on' : '') + '"></i>';
    return '<div class="ten mini">' + cells + '</div>';
  }
  const pips = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 3, 6, 2, 5, 8] }[n] || [];
  let html = '<div class="dice">';
  for (let i = 0; i < 9; i++) html += '<i class="pipdot ' + (pips.indexOf(i) >= 0 ? 'on' : '') + '"></i>';
  return html + '</div>';
}
function rodsHTML(n) {
  const tens = Math.floor(n / 10), ones = n % 10;
  let html = '<div class="rodgroup">';
  for (let i = 0; i < tens; i++) html += '<div class="rod">10</div>';
  if (ones) {
    html += '<div class="ones">';
    for (let i = 0; i < ones; i++) html += '<i class="berry"></i>';
    html += '</div>';
  }
  return html + '</div>';
}
function bondHTML(whole, part, part2) {
  const right = part2 == null ? '?' : part2;
  return '<div class="bond"><div class="bwhole">' + whole + '</div><div class="barms"></div><div class="bparts"><div class="bpart">' + part + '</div><div class="bpart">' + right + '</div></div></div>';
}
function visualHTML(v) {
  if (!v || v.type === 'none') return '';
  if (v.type === 'frame') return frameHTML(v.n);
  if (v.type === 'make') return v.hint || v.keep ? makeHTML(v) : '<div class="friendly-vis"><div class="fn-num">' + v.keep + '</div><div class="opbig">+</div><div class="fn-num">' + v.broken + '</div></div>';
  if (v.type === 'teen') return v.hint ? teenHTML(v) : '';
  if (v.type === 'hops') {
    let dots = '';
    for (let i = 0; i < v.hops; i++) dots += '<i class="hopdot"></i>';
    return '<div class="hops"><div class="stone start">' + v.start + '</div>' + dots + '<div class="stone">?</div></div>';
  }
  if (v.type === 'pair') return '<div class="pair">' + diceHTML(v.n) + '<div class="opbig">' + (v.n === v.m ? '+' : '+') + '</div>' + diceHTML(v.m) + '</div>';
  if (v.type === 'bond') return bondHTML(v.whole, v.part, v.part2 == null ? null : v.part2);
  if (v.type === 'rods') return '<div class="rodrow">' + rodsHTML(v.a) + '<div class="opbig">' + (v.op || '+') + '</div>' + rodsHTML(v.b) + '</div>';
  if (v.type === 'friendly') {
    const bump = v.showBump ? '<div class="opbig">+' + v.bump + '</div>' : '<div class="opbig">→</div>';
    return '<div class="friendly-vis"><div class="fn-num">' + v.n + '</div>' + bump + '<div class="fn-num ten">10</div></div>';
  }
  return '';
}

function slotHTML(tok, entries, mode) {
  const val = mode.solved ? String(tok.expect) : (entries[tok.slot] || '');
  const cap = tok.cap ? '<span class="cap">' + esc(t(tok.cap)) + '</span>' : '<span class="cap"></span>';
  if (tok.pre || mode.solved) {
    return '<label class="field"><span class="slot pre ok">' + esc(val) + '</span>' + cap + '</label>';
  }
  const bad = state.bad && state.bad[tok.slot] ? ' bad' : '';
  const shake = state.shake === tok.slot ? ' shake' : '';
  const on = state.focus === tok.slot ? ' on' : '';
  const label = tok.cap ? t(tok.cap) : tok.slot;
  return '<label class="field"><input class="slot' + bad + shake + on + '" data-slot="' + tok.slot + '" inputmode="numeric" enterkeyhint="done" pattern="[0-9]*" maxlength="' + tok.max + '" autocomplete="off" value="' + esc(val) + '" aria-label="' + esc(label) + '">' + cap + '</label>';
}
function rowHTML(row, entries, mode) {
  return '<div class="eq">' + row.map(tok => {
    if (tok.t != null) return '<span class="lit">' + esc(tok.t) + '</span>';
    if (tok.b) return '<span class="lit">' + esc(t(tok.b)) + '</span>';
    if (tok.echo) {
      const v = mode.solved ? String(findExpect(mode.problem, tok.echo)) : (entries[tok.echo] || '');
      const filled = v !== '' && v != null;
      return '<span class="echo ' + (filled ? 'filled' : '') + '" data-echo="' + esc(tok.echo) + '">' + (filled ? esc(v) : '?') + '</span>';
    }
    if (tok.slot) return slotHTML(tok, entries, mode);
    return '';
  }).join('') + '</div>';
}
function findExpect(p, id) {
  const s = findSlot(p, id);
  return s ? s.expect : '';
}
function cardInner(p, mode) {
  mode = mode || {};
  mode.problem = p;
  const entries = mode.solved ? {} : state.entries;
  const m = meta(p.method);
  const chip = '<div class="chip" style="background:' + m.color + ';color:' + m.ink + '"><b>' + esc(t(m)) + '</b><small>' + esc(schoolOf(m)) + '</small></div>';
  const story = p.story ? '<p class="story">' + esc(t(p.story)) + '</p>' : '';
  const rows = p.rows.map(r => rowHTML(r, entries, mode)).join('');
  return chip + story + visualHTML(p.visual) + '<div class="headline">' + esc(p.headline) + '</div>' + rows;
}

function topHTML() {
  const lang = progress.lang;
  return '<header class="top"><button class="brand" data-act="home" type="button" aria-label="home">' + heartLogo() + '</button><div class="tools">' +
    '<input class="namein" id="player-name" maxlength="16" placeholder="' + (lang === 'vi' ? 'Tên con' : 'Name') + '" value="' + esc(progress.name) + '" aria-label="name">' +
    '<button type="button" class="pill ' + (lang === 'en' ? 'on' : '') + '" data-act="lang" data-lang="en">EN</button>' +
    '<button type="button" class="pill ' + (lang === 'vi' ? 'on' : '') + '" data-act="lang" data-lang="vi">VI</button>' +
    '<button type="button" data-act="sound" class="' + (progress.sound ? 'on' : '') + '">' + ui('sound') + '</button>' +
    '<button type="button" data-act="read" class="' + (progress.read ? 'on' : '') + '">' + ui('read') + '</button>' +
    '<button type="button" data-act="wood-toggle">Soroban</button>' +
    '<button type="button" data-act="full">' + (lang === 'vi' ? 'Cả màn hình' : 'Full screen') + '</button>' +
    '<span class="jar"><i class="dotberry"></i>' + (progress.fruit || 0) + '</span></div></header>';
}
function footerHTML() {
  return '';
}

function bedArt(id) {
  const face = '<circle cx="0" cy="0" r="16" fill="#fff" stroke="#4a2d5c" stroke-width="2"/><circle cx="-5" cy="-2" r="2.2" fill="#4a2d5c"/><circle cx="5" cy="-2" r="2.2" fill="#4a2d5c"/><path d="M-5 5 q5 5 10 0" fill="none" stroke="#4a2d5c" stroke-width="2" stroke-linecap="round"/>';
  const scenes = {
    bonds: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#ffe08a"/><g transform="translate(46 58)">' + [0,1,2,3,4,5,6,7,8,9].map(i => '<circle cx="' + ((i % 5) * 28) + '" cy="' + (Math.floor(i / 5) * 28) + '" r="11" fill="' + (i < 7 ? '#ff5d8f' : '#fff') + '" stroke="#4a2d5c" stroke-width="2"/>').join('') + '</g><g transform="translate(230 78)">' + face + '</g><text x="210" y="130" font-size="28" font-family="Trebuchet MS, Segoe UI, sans-serif" fill="#4a2d5c" font-weight="700">10</text></svg>',
    counton: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#8fd6ff"/><ellipse cx="70" cy="130" rx="28" ry="16" fill="#fff" stroke="#4a2d5c" stroke-width="2"/><ellipse cx="150" cy="118" rx="28" ry="16" fill="#fff" stroke="#4a2d5c" stroke-width="2"/><ellipse cx="230" cy="106" rx="28" ry="16" fill="#ffe08a" stroke="#4a2d5c" stroke-width="2"/><text x="62" y="136" font-size="16" font-family="Trebuchet MS, Segoe UI, sans-serif" font-weight="700">1</text><text x="142" y="124" font-size="16" font-family="Trebuchet MS, Segoe UI, sans-serif" font-weight="700">2</text><text x="222" y="112" font-size="16" font-family="Trebuchet MS, Segoe UI, sans-serif" font-weight="700">3</text><g transform="translate(230 70)">' + face + '</g></svg>',
    doubles: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#ffd6e4"/><g transform="translate(90 80)">' + face + '</g><g transform="translate(190 80)">' + face + '</g><text x="128" y="150" font-size="28" font-family="Trebuchet MS, Segoe UI, sans-serif" fill="#ff5d8f" font-weight="700">+</text></svg>',
    maketen: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#b6f38a"/><g transform="translate(36 40)">' + [0,1,2,3,4,5,6,7,8,9].map(i => '<circle cx="' + ((i % 5) * 26) + '" cy="' + (Math.floor(i / 5) * 26) + '" r="10" fill="' + (i < 8 ? '#ff5d8f' : '#ffe08a') + '" stroke="#4a2d5c" stroke-width="2"/>').join('') + '</g><text x="190" y="90" font-size="36" font-family="Trebuchet MS, Segoe UI, sans-serif" fill="#1f8a56" font-weight="700">8+2</text></svg>',
    taketen: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#e7d6ff"/><ellipse cx="70" cy="120" rx="40" ry="18" fill="#fff" stroke="#4a2d5c" stroke-width="2"/><text x="52" y="126" font-size="18" font-family="Trebuchet MS, Segoe UI, sans-serif" font-weight="700">10</text><g transform="translate(210 78)">' + face + '</g><path d="M120 90 q40 -30 70 0" fill="none" stroke="#6d4c9e" stroke-width="4"/></svg>',
    think: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#ffd8b8"/><circle cx="150" cy="78" r="36" fill="#fff" stroke="#4a2d5c" stroke-width="3"/><text x="118" y="88" font-size="28" font-family="Trebuchet MS, Segoe UI, sans-serif" font-weight="700">?</text><g transform="translate(250 90)">' + face + '</g></svg>',
    friendly: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#ffe08a"/><circle cx="90" cy="80" r="36" fill="#ffd84a" stroke="#4a2d5c" stroke-width="3"/><circle cx="78" cy="74" r="4" fill="#4a2d5c"/><circle cx="102" cy="74" r="4" fill="#4a2d5c"/><path d="M76 90 q14 12 28 0" fill="none" stroke="#4a2d5c" stroke-width="3"/><text x="160" y="96" font-size="32" font-family="Trebuchet MS, Segoe UI, sans-serif" fill="#ff5d8f" font-weight="700">+10 −1</text></svg>',
    place: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#c9f4f2"/><rect x="40" y="40" width="28" height="90" rx="6" fill="#ffd36e" stroke="#4a2d5c" stroke-width="2"/><rect x="78" y="40" width="28" height="90" rx="6" fill="#ffd36e" stroke="#4a2d5c" stroke-width="2"/><circle cx="150" cy="100" r="12" fill="#ff5d8f" stroke="#4a2d5c" stroke-width="2"/><circle cx="180" cy="100" r="12" fill="#ff5d8f" stroke="#4a2d5c" stroke-width="2"/><circle cx="210" cy="100" r="12" fill="#ff5d8f" stroke="#4a2d5c" stroke-width="2"/></svg>',
    mix: '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#fff3bf"/><ellipse cx="160" cy="110" rx="70" ry="28" fill="#e7c49a" stroke="#4a2d5c" stroke-width="3"/><circle cx="130" cy="88" r="16" fill="#ff5d8f"/><circle cx="160" cy="78" r="16" fill="#7dde6a"/><circle cx="190" cy="88" r="16" fill="#74c0fc"/><circle cx="150" cy="100" r="14" fill="#ffe08a"/></svg>'
  };
  return '<span class="art">' + (scenes[id] || scenes.mix) + '</span>';
}
function renderHome() {
  const beds = METHODS.map(m => {
    const n = starsFor(m.id);
    const ribbon = m.id === 'bonds' ? '<span class="ribbon">' + esc(ui('startHere')) + '</span>' : '';
    const tag = m.tag ? '<span class="tag">' + esc(t(m.tag)) + '</span>' : '';
    return '<button type="button" class="bed" style="--c:' + m.color + '" data-act="bed" data-method="' + m.id + '">' + bedArt(m.id) + ribbon +
      '<span class="bedcopy"><span class="num">' + m.order + '</span> <span class="nm">' + esc(t(m)) + '</span>' +
      '<div class="stars">' + starStr(Math.min(3, Math.ceil(n / 4))) + '</div>' + tag + '</span></button>';
  }).join('');
  const done = progress.daily[dateKey()];
  const readN = BOOK_IDS.filter(id => progress.readCh[id]).length;
  const filled = state.filled || {};
  let got = 0;
  for (let i = 0; i < 10; i++) if (filled[i]) got++;
  const need = 10 - got;
  const cells = [];
  for (let i = 0; i < 10; i++) {
    cells.push('<button type="button" class="dot' + (filled[i] ? ' on' : '') + '" data-act="tap" data-i="' + i + '" aria-label="' + (i + 1) + '"></button>');
  }
  const next = nextBed();
  const tapLine = got === 10
    ? (progress.lang === 'vi' ? 'Đủ 10 rồi!' : 'That is 10!')
    : (progress.lang === 'vi' ? got + ' quả. Cần thêm ' + need + '.' : got + ' berries. Need ' + need + ' more.');
  return '<div class="wrap">' + topHTML() +
    '<div class="homebody"><section class="beds">' + beds + '</section>' +
    '<aside class="stage"><p class="stageh">' + esc(progress.lang === 'vi' ? 'Chạm quả. Làm thành 10.' : 'Tap berries. Make 10.') + '</p>' +
    '<div class="tapten">' + cells.join('') + '</div>' +
    '<p class="tapmsg">' + esc(tapLine) + '</p>' +
    '<button type="button" class="textbtn sun" data-act="start" data-method="' + next.method + '" data-level="' + next.level + '">' +
    esc(progress.lang === 'vi' ? 'Chơi tiếp: ' + t(next.meta) : 'Play next: ' + next.meta.en) + '</button>' +
    '<div class="doors stage-doors">' +
    '<button type="button" class="door daily" data-act="daily"><b>' + esc(ui('daily')) + '</b><small>' + esc(todayLabel()) + (done ? ' · ' + ui('doneDaily') : '') + '</small></button>' +
    '<button type="button" class="door book" data-act="parents"><b>' + esc(ui('parents')) + '</b><small>' + readN + ' / ' + BOOK_IDS.length + '</small></button>' +
    '</div></aside></div>' + footerHTML() + '</div>';
}
function nextBed() {
  for (let i = 0; i < METHODS.length; i++) {
    const m = METHODS[i];
    for (let lv = 1; lv <= 4; lv++) {
      if (unlocked(m.id, lv) && (progress.stars[m.id + '-' + lv] || 0) < 1) return { method: m.id, level: lv, meta: m };
    }
  }
  return { method: 'mix', level: 1, meta: METHODS[METHODS.length - 1] };
}

function renderIntro() {
  const m = meta(state.method);
  const levels = m.levels.map((blurb, i) => {
    const lv = i + 1;
    const open = unlocked(m.id, lv);
    const stars = progress.stars[m.id + '-' + lv] || 0;
    return '<button type="button" class="lvbtn ' + (open ? '' : 'lock') + '" data-act="' + (open ? 'start' : 'locked') + '" data-method="' + m.id + '" data-level="' + lv + '"><b>' + esc(t(LEVEL_NAME[i])) + '</b> ' + starStr(stars) + '<small>' + esc(t(blurb)) + '</small></button>';
  }).join('');
  return '<div class="wrap">' + topHTML() +
    '<div class="playtop"><button type="button" class="pill" data-act="home">' + esc(ui('garden')) + '</button></div>' +
    '<article class="panel"><div class="introhead">' + heartLogo() +
    '<div><h2 style="font-family:Georgia,serif;margin:0 0 4px">' + esc(t(m)) + '</h2><p class="en" style="color:#5c564e;font-weight:800;margin:0">' + esc(schoolOf(m)) + '</p></div></div>' +
    bothHTML(m.kid) + speakers(m.kid) +
    '<div class="hintrow"><button type="button" class="textbtn sun" data-act="demo" data-method="' + m.id + '">' + esc(ui('watch')) + '</button><span class="cap" style="max-width:none">' + esc(ui('about')) + '</span>' +
    (m.id === 'bonds' ? '<button type="button" class="textbtn go" data-act="ten-play">' + esc(ui('tenPlay')) + '</button>' : '') + '</div>' +
    '<div class="levels">' + levels + '</div>' +
    (state.flash ? '<div class="banner" style="margin-top:12px">' + esc(t(state.flash)) + '</div>' : '') +
    '</article>' + footerHTML() + '</div>';
}

function dotsHTML() {
  const n = state.round.problems.length;
  const i = state.round.index;
  let h = '';
  for (let k = 0; k < n; k++) h += '<i class="' + (k < i ? 'did' : k === i ? 'now' : '') + '"></i>';
  return '<div class="dots" aria-hidden="true">' + h + '</div>';
}
function usePhoneKeys() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  const touch = window.matchMedia('(pointer: coarse)').matches || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
  const portrait = window.matchMedia('(orientation: portrait)').matches;
  const phone = window.matchMedia('(max-width: 1024px)').matches;
  return !!(touch && portrait && phone);
}
function padHTML() {
  const keys = [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['bs', '←'], ['0', '0'], ['ok', '✓']];
  const p = cur();
  const ready = p && inputSlots(p).every(s => state.entries[s.slot]) ? 'ready' : '';
  return '<aside class="pad"><div class="keys">' + keys.map(k => {
    if (k[0] === 'ok') return '<button type="button" class="key" data-act="check" aria-label="check">✓</button>';
    return '<button type="button" class="key" data-act="key" data-k="' + k[0] + '">' + k[1] + '</button>';
  }).join('') + '</div><button type="button" class="check ' + ready + '" data-act="check">' + esc(ui('check')) + '</button><p class="typehint">' + esc(ui('typehint')) + '</p></aside>';
}

function renderPlay() {
  const p = cur();
  const headM = meta(state.round.method);
  const watch = state.demo && state.round.demoPhase === 'watch';
  const bubble = state.bubble || p.coach;
  const mood = state.round.locked && !watch ? 'wow' : (state.bad && Object.keys(state.bad).length ? 'oops' : 'think');
  const banner = (!progress.sawHow && !state.demo) ? '<div class="banner">' + esc(ui('how')) + '</div>' : '';
  const sit = (progress.sit && SIT[p.method]) ? '<div class="sit">' + bothHTML(SIT[p.method]) + '</div>' : '';
  const recap = state.recapOn ? '<div class="recap">' + bothHTML(p.recap) + speakers(p.recap) + '</div>' : '';
  let actions = '';
  if (state.demo && state.round.demoPhase === 'done') {
    actions = '<div class="hintrow"><button type="button" class="textbtn sun" data-act="demo-try">' + esc(ui('yourTurn')) + '</button><button type="button" class="textbtn go" data-act="start" data-method="' + state.method + '" data-level="1">' + esc(ui('playSeed')) + '</button></div>';
  } else if (state.demo && state.round.demoPhase === 'solved') {
    actions = '<div class="hintrow"><button type="button" class="textbtn go" data-act="start" data-method="' + state.method + '" data-level="1">' + esc(ui('playSeed')) + '</button><button type="button" class="textbtn" data-act="intro">' + esc(ui('back')) + '</button></div>';
  } else if (state.round.locked && !state.demo) {
    actions = '<div class="hintrow"><button type="button" class="textbtn go" data-act="next">' + esc(ui('next')) + '</button></div>';
  } else if (!watch) {
    const label = state.talked ? ui('fill') : ui('hint');
    actions = '<div class="hintrow"><button type="button" class="quiet" data-act="hint">' + esc(label) + '</button>' +
      '<button type="button" class="quiet" data-act="sit">' + esc(progress.sit ? ui('sitOn') : ui('sitOff')) + '</button></div>';
  }
  const showPad = !watch && !(state.demo && (state.round.demoPhase === 'done' || state.round.demoPhase === 'solved'));
  const nativeKeys = showPad && usePhoneKeys();
  const ready = p && inputSlots(p).every(function (s) { return state.entries[s.slot]; }) ? 'ready' : '';
  const phoneCheck = nativeKeys ? '<button type="button" class="check phone-check ' + ready + '" data-act="check">' + esc(ui('check')) + '</button>' : '';
  const title = state.demo ? ui('watch') : (t(headM) + ' · ' + t(LEVEL_NAME[(state.level || 1) - 1]));
  return '<div class="wrap">' + topHTML() +
    '<div class="playtop"><button type="button" class="pill" data-act="back">' + esc(ui('back')) + '</button><strong>' + esc(title) + '</strong>' + dotsHTML() + '</div>' +
    banner + '<div class="playwrap' + (nativeKeys ? ' native-keys' : '') + '"><article class="playcard">' + cardInner(p, { solved: !!(state.round && state.round.locked) }) + phoneCheck +
    '<div class="bubble" aria-live="polite">' + pipSVG(mood) + '<div>' + bothHTML(bubble) + speakers(bubble) + recap + sit + actions + '</div></div></article>' +
    (showPad && !nativeKeys ? padHTML() : '') + '</div>' +
    (state.leaveAsk ? '<div class="dlgback"><div class="dlg">' + bothHTML(bi(UI.leave.en, UI.leave.vi)) + bothHTML(bi(UI.leave2.en, UI.leave2.vi)) +
      '<div class="row"><button type="button" class="textbtn sun" data-act="stay">' + esc(ui('stay')) + '</button><button type="button" class="textbtn" data-act="home">' + esc(ui('garden')) + '</button></div></div></div>' : '') +
    '</div>';
}

function confettiHTML() {
  const colors = ['#e23d5c', '#ffc44d', '#1f8a56', '#3aa0e8', '#6d4c9e'];
  let h = '';
  for (let i = 0; i < 18; i++) {
    h += '<i style="left:' + ((i * 17) % 100) + '%;background:' + colors[i % 5] + ';animation-delay:' + ((i % 7) * 0.08) + 's"></i>';
  }
  return '<div class="confetti">' + h + '</div>';
}
function renderClear() {
  const c = state.clear;
  const name = progress.name || (progress.lang === 'vi' ? 'Con' : 'You');
  const title = progress.lang === 'vi' ? (name + ' vừa trồng một bông.') : (name + ' grew a flower.');
  const line = c.stars === 3
    ? bi('Clean round. No misses.', 'Sạch. Không vấp lần nào.')
    : bi('You finished. That is a real flower.', 'Xong rồi. Đây là một bông hoa thật.');
  const next = c.method !== 'daily' && c.level < 4
    ? '<button type="button" class="textbtn go" data-act="start" data-method="' + c.method + '" data-level="' + (c.level + 1) + '">' + esc(ui('nextLv')) + '</button>' : '';
  const again = c.method === 'daily'
    ? '<button type="button" class="textbtn sun" data-act="daily">' + esc(ui('again')) + '</button>'
    : '<button type="button" class="textbtn sun" data-act="start" data-method="' + c.method + '" data-level="' + c.level + '">' + esc(ui('again')) + '</button>';
  const nextLine = progress.lang === 'vi' ? 'Chọn bài tiếp. Vườn vẫn ở đây.' : 'Pick the next one. The garden is still here.';
  return '<div class="wrap"><div class="clearwrap">' + confettiHTML() + topHTML() +
    '<div class="clearcard">' + pipSVG('wow') +
    '<h2>' + esc(title) + '</h2><div class="bigstars">' + starStr(c.stars) + '</div>' + bothHTML(line) +
    '<p class="tapmsg">' + esc(nextLine) + '</p>' +
    '<div class="hintrow" style="justify-content:center">' + next + again +
    '<button type="button" class="textbtn" data-act="home">' + esc(ui('garden')) + '</button></div></div></div></div>';
}

const BOOK = {
  how: {
    title: bi('How these ways work', 'Các cách tính này hoạt động thế nào'),
    school: bi('make a ten · break apart · doubles · count on', 'làm thành 10 · tách số · số đôi · đếm tiếp'),
    paras: [
      bi('These are collected classroom ways, not one person’s invention. Once a problem is bigger than +1, +2, or +3, stop counting every finger. See a group, know 10, and break a number into easier parts.',
        'Đây là các cách tính gom từ lớp học, không phải phát minh của một người. Khi phép tính lớn hơn cộng 1, 2 hoặc 3, đừng đếm từng ngón. Hãy thấy một nhóm, thuộc số 10, và tách số thành phần dễ hơn.'),
      bi('A rewrite is the same number written in friendlier parts. A 6 written as 2 and 4 still is 6, and 8 needs that 2 to become 10. A 9 written as 10 minus 1 is the same idea.',
        'Viết lại là cùng một số, chỉ tách thành phần dễ hơn. Số 6 viết thành 2 và 4 vẫn là 6, và 8 cần đúng số 2 đó để thành 10. Số 9 viết thành 10 trừ 1 cũng là ý đó.'),
      bi('The names in this book are the usual classroom names: make a ten, break apart, doubles, near doubles, count on, think addition, compensation. Each page is the idea, then the sentence to say while you sit beside your child.',
        'Tên trong sách này là tên thường dùng ở lớp: làm thành 10, tách số, số đôi, gần đôi, đếm tiếp, nghĩ phép cộng, bù số. Mỗi trang là ý chính, rồi câu nói khi ngồi cạnh con.'),
      bi('One garden bed a day, about 6 cards, is enough. Do not finish the whole garden in one night.',
        'Mỗi ngày một luống, khoảng 6 thẻ, là đủ. Đừng làm hết vườn trong một tối.'),
      bi('The Hear button reads the line in the language you have selected. If speech is silent, add that language in the device settings.',
        'Nút Nghe đọc đúng ngôn ngữ đang chọn. Nếu máy không đọc, hãy thêm gói giọng nói đó trong cài đặt máy.')
    ]
  },
  bonds: {
    school: 'number bonds to 10',
    idea: bi('Every later strategy leans on partners of 10: 9 and 1, 8 and 2, 7 and 3, 6 and 4, 5 and 5. This is not a finger song. It is a picture of a full ten.',
      'Mọi cách tính sau này đều dựa vào bạn của 10: 9 với 1, 8 với 2, 7 với 3, 6 với 4, 5 với 5. Không phải bài đếm ngón. Đây là hình một khung 10 đã đầy.'),
    say: bi('How many more to fill 10? Don’t count fingers. Look at the empty spots.',
      'Số này cần bao nhiêu nữa để đầy 10? Đừng đếm ngón. Nhìn chỗ trống.'),
    watch: bi('Counting 8, 9, 10 on fingers. Cover the fingers and point at the empty cells in the frame.',
      'Đếm 8, 9, 10 trên ngón tay. Che ngón tay và chỉ ô trống trong khung 10.')
  },
  counton: {
    school: 'count on',
    idea: bi('Count on is only for +1, +2, or +3. Always start at the bigger number. 2 + 9 is not “start at 2 and count nine times.” Start at 9: 10, 11.',
      'Đếm tiếp chỉ dùng khi cộng 1, 2 hoặc 3. Luôn bắt đầu từ số lớn. 2 + 9 không phải “bắt đầu ở 2 rồi đếm chín lần.” Bắt đầu ở 9: 10, 11.'),
    say: bi('Start at the big number. Hop only 1, 2, or 3. More than 3, switch strategies.',
      'Bắt đầu từ số lớn. Chỉ nhảy 1, 2 hoặc 3. Quá 3 thì đổi cách.'),
    watch: bi('Starting at the small number, or hopping 6 times and losing the count. That problem wants make-a-ten, not hops.',
      'Bắt đầu từ số nhỏ, hoặc nhảy 6 bước rồi lạc. Phép đó cần làm thành 10, không phải nhảy.')
  },
  doubles: {
    school: 'doubles · near doubles · doubles plus one',
    idea: bi('Doubles are the facts children can see: two same groups. Near doubles are one away. 6 + 7 is 6 + 6 + 1, or 7 + 7 − 1. Both are right.',
      'Số đôi là phép trẻ thấy bằng hình: hai nhóm giống nhau. Gần đôi là lệch một. 6 + 7 là 6 + 6 rồi thêm 1, hoặc 7 + 7 rồi bớt 1. Cả hai đều đúng.'),
    say: bi('This is a double. If they are neighbors, double and add 1, or double and take 1 away.',
      'Đây là số đôi. Nếu hai số kế nhau, lấy số đôi rồi thêm 1, hoặc bớt 1.'),
    watch: bi('Doubling the wrong one and forgetting the +1 or −1. Say which double you used, out loud, before the fix.',
      'Lấy nhầm số đôi rồi quên cộng 1 hoặc trừ 1. Nói rõ đang dùng số đôi nào, rồi mới bù.')
  },
  maketen: {
    school: bi('make a ten · break apart', 'làm thành 10 · tách số'),
    idea: bi('8 + 5. Eight needs 2. Break 5 into 2 and 3. 8 + 2 = 10, and 10 + 3 = 13. The 2 and 3 are the same 5, written in a friendlier way.',
      '8 + 5. Số 8 cần 2. Tách 5 thành 2 và 3. 8 + 2 = 10, rồi 10 + 3 = 13. Số 2 và 3 vẫn là số 5, chỉ viết lại cho dễ.'),
    say: bi('8 is almost 10. 8 needs 2. Take 2 from the 5. 5 is 2 and 3. 8 plus 2 is 10. 10 plus 3 is 13.',
      '8 sắp thành 10. 8 cần 2. Tách 2 từ số 5. 5 là 2 và 3. 8 cộng 2 là 10. 10 cộng 3 là 13.'),
    watch: bi('Breaking 5 into 1 and 4 because it “looks even.” The first box is not any split. It is the exact amount that finishes the ten.',
      'Tách 5 thành 1 và 4 vì “trông đều.” Ô đầu không phải tách kiểu nào cũng được. Đó phải đúng phần làm đầy số 10.')
  },
  taketen: {
    school: 'take from ten · decompose the number you subtract',
    idea: bi('14 − 6. You cannot take 6 from the 4 ones. Take those 4 first and you land on 10. 6 is 4 and 2, so 2 is still to take. 10 − 2 = 8.',
      '14 − 6. Không lấy 6 từ 4 đơn vị. Lấy 4 trước thì chạm 10. 6 là 4 và 2, nên còn phải lấy 2. 10 − 2 = 8.'),
    say: bi('Don’t take 6 from 4. Take the ones first to land on 10. Then take what is left from 10.',
      'Đừng lấy 6 từ 4. Lấy hết đơn vị trước để chạm 10. Rồi lấy phần còn lại từ 10.'),
    watch: bi('Trying 4 − 6 and getting stuck, or counting back six hops. Landing on 10 is the whole trick.',
      'Làm 4 − 6 rồi kẹt, hoặc đếm lùi sáu bước. Chạm được số 10 là cả mẹo.')
  },
  think: {
    school: 'think addition · missing addend',
    idea: bi('13 − 8 is the question 8 + ? = 13. Use a ten: 8 needs 2, then 3 more to reach 13. 2 + 3 = 5. Subtraction is a missing part, not a take-away fight.',
      '13 − 8 là câu hỏi 8 + ? = 13. Dùng số 10: 8 cần 2, rồi thêm 3 nữa để tới 13. 2 + 3 = 5. Phép trừ là tìm phần thiếu, không phải cuộc vật lộn lấy đi.'),
    say: bi('8 plus what is 13? 8 needs 2 to make 10, then 3 more. 2 plus 3 is 5.',
      '8 cộng mấy bằng 13? 8 cần 2 để thành 10, rồi thêm 3. 2 cộng 3 là 5.'),
    watch: bi('Counting down from 13 and losing the place. Ask the addition question first, every time.',
      'Đếm lùi từ 13 rồi lạc. Hãy hỏi câu phép cộng trước, lần nào cũng vậy.')
  },
  friendly: {
    school: bi('compensation · friendly numbers', 'bù số cho dễ'),
    idea: bi('9 + 6. Nine is one away from 10. Add 10 first: 16. You added 1 too many, so give it back: 15. For 15 − 9, take 10 first and get 5, but you took 1 too many, so give it back: 6. The sign flips. That flip is the part to say out loud.',
      '9 + 6. Số 9 cách 10 đúng một. Cộng 10 trước được 16. Cộng thừa 1, trả lại: 15. Với 15 − 9, lấy 10 trước còn 5, nhưng lấy thừa 1, phải trả lại: 6. Dấu bị đảo. Chỗ đảo dấu là chỗ phải nói to.'),
    say: bi('Add 10 first, then give 1 back. If you subtracted 10 instead of 9, you took too much — give 1 back.',
      'Cộng 10 trước, rồi trả 1. Nếu trừ 10 thay vì trừ 9, là lấy thừa — trả lại 1.'),
    watch: bi('Giving the 1 back the wrong way: subtracting again after 15 − 10. Ask: did we take too much, or too little?',
      'Trả 1 sai chiều: sau 15 − 10 lại trừ tiếp. Hỏi: mình lấy thừa hay lấy thiếu?')
  },
  place: {
    school: 'break apart · tens and ones',
    idea: bi('24 + 13 is not a column yet. It is 20 + 10 and 4 + 3. Add tens, add ones, put them together: 30 + 7 = 37. Use this when the ones do not pass 9. If the ones make 10 or more, make another ten, or go back to make-a-ten. Trading across a ten in two-digit subtraction is mostly a 2nd-grade job. This bed does not pretend to teach borrowing.',
      '24 + 13 chưa cần xếp cột. Đó là 20 + 10 và 4 + 3. Cộng chục, cộng đơn vị, ghép lại: 30 + 7 = 37. Dùng cách này khi đơn vị cộng lại chưa quá 9. Nếu đơn vị thành 10 trở lên, tách thêm một chục, hoặc quay lại làm thành 10. Trừ hai chữ số phải mượn phần lớn là việc lớp 2. Luống này không giả vờ dạy mượn.'),
    say: bi('Break tens and ones. Add tens to tens, ones to ones, then put them together. 24 plus 13 is 30 plus 7, which is 37.',
      'Tách chục và đơn vị. Cộng chục với chục, đơn vị với đơn vị, rồi ghép. 24 cộng 13 là 30 cộng 7, là 37.'),
    watch: bi('Writing 5 for 2 tens + 3 tens. Two tens is 20, not 2. Say “twenty” as you point at the rod labeled 10.',
      'Viết 5 cho 2 chục + 3 chục. Hai chục là 20, không phải 2. Nói “hai mươi” khi chỉ thanh có nhãn 10.')
  },
  choose: {
    title: bi('Which way?', 'Chọn cách nào?'),
    school: bi('strategy choice', 'chọn cách tính'),
    paras: [
      bi('There is more than one smart way. If the parts are right, celebrate it. The goal is a flexible child, not obedience to one method.',
        'Có nhiều cách thông minh. Nếu các phần đúng, hãy khen. Mục tiêu là trẻ linh hoạt, không phải tuân một cách duy nhất.')
    ],
    idea: bi('Close to 10 (7, 8, 9): make a ten, or a friendly fix. Neighbors: doubles. Only +1, +2, +3: count on from the big number. Subtraction: think addition, or take ones to land on 10. Two-digit, ones small enough: break into tens and ones.',
      'Gần 10 (7, 8, 9): làm thành 10, hoặc số thân thiện. Hai số kế nhau: số đôi. Chỉ cộng 1, 2, 3: đếm tiếp từ số lớn. Phép trừ: nghĩ phép cộng, hoặc lấy đơn vị để chạm 10. Hai chữ số, đơn vị đủ nhỏ: tách chục và đơn vị.')
  }
};

const QUIZ = {
  bonds: [
    { q: bi('What is the partner of 7 that makes 10?', 'Bạn của 7 để thành 10 là số mấy?'), choices: [bi('2', '2'), bi('3', '3'), bi('4', '4')], answer: 1, why: bi('7 + 3 = 10.', '7 + 3 = 10.') },
    { q: bi('Why learn this first?', 'Vì sao học cái này trước?'), choices: [bi('So fingers get faster', 'Để đếm ngón nhanh hơn'), bi('Other strategies need 10', 'Các cách sau đều cần số 10'), bi('Only for a test', 'Chỉ để kiểm tra')], answer: 1, why: bi('Make-a-ten, take-from-ten, and friendly numbers all stand on partners of 10.', 'Làm thành 10, lấy để chạm 10, và số thân thiện đều đứng trên bạn của 10.') }
  ],
  counton: [
    { q: bi('For 3 + 12, where do you start?', 'Với 3 + 12, bắt đầu ở đâu?'), choices: [bi('At 3', 'Ở 3'), bi('At 12', 'Ở 12'), bi('At 1', 'Ở 1')], answer: 1, why: bi('Start at the bigger number.', 'Bắt đầu từ số lớn hơn.') },
    { q: bi('Count on is only for adding up to…', 'Đếm tiếp chỉ dùng khi cộng đến…'), choices: [bi('3', '3'), bi('10', '10'), bi('20', '20')], answer: 0, why: bi('Past 3 hops, switch to make-a-ten or doubles.', 'Quá 3 bước thì đổi sang làm thành 10 hoặc số đôi.') }
  ],
  doubles: [
    { q: bi('6 + 7, using the smaller double?', '6 + 7, dùng số đôi nhỏ hơn?'), choices: [bi('12', '12'), bi('13', '13'), bi('14', '14')], answer: 1, why: bi('6 + 6 + 1 = 13.', '6 + 6 + 1 = 13.') },
    { q: bi('Another smart way for 6 + 7?', 'Cách thông minh khác cho 6 + 7?'), choices: [bi('7 + 7, then subtract 1', '7 + 7 rồi bớt 1'), bi('Count 7 fingers', 'Đếm 7 ngón'), bi('Add 2', 'Cộng 2')], answer: 0, why: bi('7 + 7 − 1 = 13. Same answer.', '7 + 7 − 1 = 13. Cùng đáp án.') }
  ],
  maketen: [
    { q: bi('8 + 5. Break 5 into…', '8 + 5. Tách 5 thành…'), choices: [bi('1 and 4', '1 và 4'), bi('2 and 3', '2 và 3'), bi('5 and 0', '5 và 0')], answer: 1, why: bi('8 needs 2. The leftover is 3.', '8 cần 2. Phần còn là 3.') },
    { q: bi('9 + 6. Break 6 into…', '9 + 6. Tách 6 thành…'), choices: [bi('1 and 5', '1 và 5'), bi('3 and 3', '3 và 3'), bi('2 and 4', '2 và 4')], answer: 0, why: bi('9 needs 1 to make 10. Then 10 + 5 = 15.', '9 cần 1 để thành 10. Rồi 10 + 5 = 15.') }
  ],
  taketen: [
    { q: bi('14 − 6. What do you take first?', '14 − 6. Lấy gì trước?'), choices: [bi('4, the ones', '4, phần đơn vị'), bi('6', '6'), bi('10', '10')], answer: 0, why: bi('Take the 4 ones to land on 10.', 'Lấy 4 đơn vị để chạm 10.') },
    { q: bi('Then 10 − 2 is…', 'Rồi 10 − 2 là…'), choices: [bi('6', '6'), bi('8', '8'), bi('9', '9')], answer: 1, why: bi('So 14 − 6 = 8.', 'Vậy 14 − 6 = 8.') }
  ],
  think: [
    { q: bi('13 − 8 is the same question as…', '13 − 8 là cùng câu hỏi với…'), choices: [bi('13 + 8', '13 + 8'), bi('8 + ? = 13', '8 + ? = 13'), bi('8 − 13', '8 − 13')], answer: 1, why: bi('Subtraction is a missing part.', 'Phép trừ là tìm phần thiếu.') },
    { q: bi('8 needs how many to make 10?', '8 cần mấy để thành 10?'), choices: [bi('1', '1'), bi('2', '2'), bi('3', '3')], answer: 1, why: bi('Then 3 more reaches 13. 2 + 3 = 5.', 'Rồi thêm 3 nữa tới 13. 2 + 3 = 5.') }
  ],
  friendly: [
    { q: bi('9 + 6. After you add 10, you…', '9 + 6. Sau khi cộng 10, bạn…'), choices: [bi('subtract 1', 'trừ 1'), bi('add 1', 'cộng 1'), bi('subtract 9', 'trừ 9')], answer: 0, why: bi('You added 1 too many. Give it back. 16 − 1 = 15.', 'Cộng thừa 1. Trả lại. 16 − 1 = 15.') },
    { q: bi('15 − 9. You subtract 10 and get 5. Next?', '15 − 9. Trừ 10 còn 5. Tiếp theo?'), choices: [bi('Add 1 back', 'Cộng lại 1'), bi('Subtract 1 more', 'Trừ thêm 1'), bi('Add 10', 'Cộng 10')], answer: 0, why: bi('You took 1 too many, so give it back. 5 + 1 = 6.', 'Lấy thừa 1, phải trả lại. 5 + 1 = 6.') }
  ],
  place: [
    { q: bi('24 + 13. The tens add to…', '24 + 13. Phần chục cộng thành…'), choices: [bi('30', '30'), bi('5', '5'), bi('37', '37')], answer: 0, why: bi('20 + 10 = 30. Write thirty, not 5.', '20 + 10 = 30. Viết ba mươi, không viết 5.') },
    { q: bi('The ones add to…', 'Phần đơn vị cộng thành…'), choices: [bi('5', '5'), bi('7', '7'), bi('12', '12')], answer: 1, why: bi('4 + 3 = 7. Then 30 + 7 = 37.', '4 + 3 = 7. Rồi 30 + 7 = 37.') }
  ],
  choose: [
    { q: bi('2 + 17. A smart way is…', '2 + 17. Cách thông minh là…'), choices: [bi('Count on from 17', 'Đếm tiếp từ 17'), bi('Break 17 into funny parts for no reason', 'Tách 17 lung tung'), bi('Count 17 hops from 2', 'Nhảy 17 bước từ 2')], answer: 0, why: bi('Plus 2 is a hop. Start at 17.', 'Cộng 2 là nhảy. Bắt đầu ở 17.') },
    { q: bi('8 + 7. A smart way is…', '8 + 7. Cách thông minh là…'), choices: [bi('Count 7 fingers', 'Đếm 7 ngón'), bi('Make a ten, or use doubles', 'Làm thành 10, hoặc dùng số đôi'), bi('Stack and carry on paper', 'Xếp cột và nhớ trên giấy')], answer: 1, why: bi('8 needs 2, so 7 is 2 and 5. Or 7 + 7 + 1.', '8 cần 2, nên 7 là 2 và 5. Hoặc 7 + 7 + 1.') },
    { q: bi('14 − 6. A smart way is…', '14 − 6. Cách thông minh là…'), choices: [bi('Take 6 from the 4 ones', 'Lấy 6 từ 4 đơn vị'), bi('Take the ones first and land on 10', 'Lấy đơn vị trước để chạm 10'), bi('Guess', 'Đoán')], answer: 1, why: bi('14 − 4 = 10, then 10 − 2 = 8.', '14 − 4 = 10, rồi 10 − 2 = 8.') }
  ]
};

function chapterTitle(id) {
  if (id === 'how') return BOOK.how.title;
  if (id === 'choose') return BOOK.choose.title;
  const m = meta(id);
  return bi(m.en, m.vi);
}

function renderParents() {
  const nav = BOOK_IDS.map(id => {
    const on = state.chapter === id ? ' on' : '';
    const mark = progress.readCh[id] ? ' · ✓' : '';
    return '<button type="button" class="' + on + '" data-act="chapter" data-id="' + id + '">' + esc(t(chapterTitle(id))) + mark + '</button>';
  }).join('');
  return '<div class="wrap">' + topHTML() +
    '<div class="playtop"><button type="button" class="pill" data-act="home">' + esc(ui('garden')) + '</button><strong>' + esc(ui('parents')) + '</strong></div>' +
    '<div class="book"><nav class="chapters">' + nav + '</nav>' + renderChapter(state.chapter) + '</div>' + footerHTML() + '</div>';
}

function renderChapter(id) {
  const ch = BOOK[id];
  const title = chapterTitle(id);
  const school = METHODS.some(function (m) { return m.id === id; }) ? schoolOf(meta(id)) : t(ch.school || '');
  let body = '<article class="chapter panel"><h2>' + esc(t(title)) + '</h2><div class="school">' + esc(school) + '</div>';
  const paras = ch.paras || (ch.idea ? [ch.idea] : []);
  paras.forEach(p => { body += '<div class="idea">' + bothHTML(p) + '</div>'; });
  if (id === 'how') {
    METHODS.forEach(m => {
      body += '<div class="idea"><b>' + esc(t(m)) + '</b><p>' + esc(schoolOf(m)) + '</p></div>';
    });
  }
  if (ch.say) body += '<div class="say"><h3>' + esc(ui('say')) + '</h3>' + bothHTML(ch.say) + speakers(ch.say) + '</div>';
  if (ch.watch) body += '<div class="watch"><h3>' + esc(ui('watchOut')) + '</h3>' + bothHTML(ch.watch) + '</div>';
  if (METHODS.some(m => m.id === id)) {
    const demo = demoProblem(id);
    body += '<p class="solved-label">' + esc(ui('example')) + '</p><div class="playcard" style="box-shadow:none">' + cardInner(demo, { solved: true }) +
      '<div class="recap">' + bothHTML(demo.recap) + '</div></div>';
    body += '<div class="hintrow"><button type="button" class="textbtn go" data-act="start" data-method="' + id + '" data-level="1" data-sit="1">' + esc(ui('practice')) + '</button>' +
      (id === 'bonds' ? '<button type="button" class="textbtn sun" data-act="ten-play">' + esc(ui('tenPlay')) + '</button>' : '') +
      '<button type="button" class="textbtn sun" data-act="quiz-start" data-id="' + id + '">' + esc(ui('quiz')) + '</button></div>';
  }
  if (id === 'choose') {
    body += '<div class="hintrow"><button type="button" class="textbtn sun" data-act="quiz-start" data-id="choose">' + esc(ui('quiz')) + '</button></div>';
  }
  body += renderQuiz(id);
  if (id === 'how') {
    body += '<div class="hintrow" style="margin-top:16px"><button type="button" class="quiet" data-act="unlock">' + esc(progress.unlockAll ? ui('unlocked') : ui('unlock')) + '</button>' +
      '<button type="button" class="quiet" data-act="reset">' + esc(ui('reset')) + '</button></div>';
    if (state.resetAsk) {
      body += '<div class="watch"><p>' + esc(progress.lang === 'vi' ? 'Xóa sao, tên, và tiến độ trên máy này?' : 'Erase stars, name, and progress on this device?') + '</p><button type="button" class="textbtn" data-act="reset-yes">' + esc(ui('resetYes')) + '</button></div>';
    }
  }
  return body + '</article>';
}

function renderQuiz(id) {
  if (!state.quiz || state.quiz.id !== id) return '';
  const qs = QUIZ[id] || [];
  const qz = state.quiz;
  if (qz.i >= qs.length) {
    const best = Math.max(progress.quiz[id] || 0, qz.score);
    return '<div class="say"><h3>' + qz.score + ' / ' + qs.length + '</h3>' + bothHTML(bi('Best on this device: ' + best + '.', 'Điểm cao trên máy này: ' + best + '.')) + '</div>';
  }
  const q = qs[qz.i];
  const choices = q.choices.map((c, i) => {
    let cls = 'choice';
    if (qz.locked) {
      if (i === q.answer) cls += ' right';
      else if (i === qz.picked) cls += ' wrong';
    }
    return '<button type="button" class="' + cls + '" data-act="choice" data-i="' + i + '">' + esc(t(c)) + '</button>';
  }).join('');
  const why = qz.locked ? '<div class="recap">' + bothHTML(q.why) + '</div><button type="button" class="textbtn go" data-act="quiz-next">' + esc(ui('next')) + '</button>' : '';
  return '<div class="idea"><h3>' + (qz.i + 1) + ' / ' + qs.length + '</h3>' + bothHTML(q.q) + choices + why + '</div>';
}

function renderCurtain() {
  const kid = progress.name || 'Natalie';
  const hi = progress.lang === 'vi' ? 'Xin chào' : 'Hi';
  const garden = progress.lang === 'vi' ? 'Vườn hát của ' + kid : kid + "'s singing garden";
  const go = progress.lang === 'vi' ? 'Chơi nào!' : "Let's play!";
  const note = progress.lang === 'vi' ? 'Bấm để mở cả màn hình' : 'Tap to fill the whole screen';
  return '<div class="splash"><div class="splash-card">' + heartLogo() +
    '<p class="hi">' + esc(hi) + '</p><h1>' + esc(kid) + '!</h1><p class="subname">' + esc(garden) + '</p>' +
    '<button type="button" class="playbig" data-act="enter">' + esc(go) + '</button>' +
    '<p class="splash-note">' + esc(note) + '</p></div></div>';
}
function goFull() {
  if (typeof document === 'undefined') return;
  const el = document.documentElement;
  if (!document.fullscreenElement && el.requestFullscreen) {
    el.requestFullscreen().catch(function () {});
  }
}
function ensureSoroban() {
  const n = progress.soroCols || 5;
  if (state.soroban && state.soroban.length === n) return;
  const old = state.soroban || [];
  const next = [];
  for (let i = 0; i < n; i++) {
    const oldIndex = old.length - n + i;
    next.push(oldIndex >= 0 && old[oldIndex] ? old[oldIndex] : { heaven: false, earth: 0 });
  }
  state.soroban = next;
}
function sorobanValue() {
  ensureSoroban();
  let n = 0;
  const rods = state.soroban;
  for (let i = 0; i < rods.length; i++) {
    const place = rods.length - 1 - i;
    const v = (rods[i].heaven ? 5 : 0) + rods[i].earth;
    n += v * Math.pow(10, place);
  }
  return n;
}
function miniAbacus() {
  let rods = '';
  for (let i = 0; i < 5; i++) {
    const x = 16 + i * 14;
    rods += '<line x1="' + x + '" y1="5" x2="' + x + '" y2="43" stroke="#f0d7a4" stroke-width="1.6"/>' +
      '<ellipse cx="' + x + '" cy="12" rx="4.4" ry="3.1" fill="#111"/>' +
      '<ellipse cx="' + x + '" cy="31" rx="4.4" ry="3.1" fill="#111"/>' +
      '<ellipse cx="' + x + '" cy="36" rx="4.4" ry="3.1" fill="#111"/>' +
      '<ellipse cx="' + x + '" cy="41" rx="4.4" ry="3.1" fill="#111"/>';
  }
  return '<svg viewBox="0 0 96 48" aria-hidden="true"><rect x="1" y="1" width="94" height="46" rx="2" fill="#e7c08a" stroke="#c4924e" stroke-width="2"/>' +
    '<rect x="5" y="20" width="86" height="4" fill="#f3d7a2"/>' + rods + '</svg>';
}
function sorobanHTML() {
  ensureSoroban();
  const vi = progress.lang === 'vi';
  if (!state.sorobanOpen) {
    return '<button type="button" class="soro-fab" data-act="soro-toggle" aria-label="' + (vi ? 'Mở bàn tính' : 'Open abacus') + '">' + miniAbacus() + '</button>';
  }
  const rods = state.soroban.map(function (rod, i) {
    const place = state.soroban.length - 1 - i;
    const dot = place % 3 === 0 ? '<i></i>' : '';
    let beads = '<button type="button" class="bead" data-act="soro-heaven" data-rod="' + i + '" aria-label="5"></button>';
    for (let b = 0; b < 4; b++) {
      beads += '<button type="button" class="bead" data-act="soro-earth" data-rod="' + i + '" data-bead="' + b + '" aria-label="1"></button>';
    }
    return '<div class="soro-rod">' + beads + '<div class="beam">' + dot + '</div></div>';
  }).join('');
  const num = sorobanValue().toLocaleString(vi ? 'vi-VN' : 'en-US');
  if (progress.soroColor !== 'white') progress.soroColor = 'black';
  const color = progress.soroColor;
  return '<div class="soro-win' + (state.soroFull ? ' full' : '') + '" role="dialog" aria-label="' + (vi ? 'Bàn tính' : 'Abacus') + '">' +
    (state.soroHelp ? soroHelpHTML() : '') +
    '<section class="soro-board beads-' + color + '"><i class="brass tl"></i><i class="brass tr"></i><i class="brass bl"></i><i class="brass br"></i>' +
    '<button type="button" class="soro-clear" data-act="soro-clear" aria-label="' + (vi ? 'Xóa' : 'Clear') + '">0</button>' +
    '<span class="soro-num">' + esc(num) + '</span>' +
    '<button type="button" class="soro-q" data-act="soro-help" aria-label="help">?</button>' +
    '<button type="button" class="soro-gear" data-act="soro-settings" aria-label="settings">⚙</button>' +
    '<button type="button" class="soro-max" data-act="soro-max" aria-label="' + (vi ? 'Phủ màn hình' : 'Full screen') + '">' + (state.soroFull ? '▢' : '⛶') + '</button>' +
    '<button type="button" class="soro-close" data-act="soro-toggle" aria-label="' + (vi ? 'Đóng' : 'Close') + '">×</button>' +
    (state.soroSet ? soroSettingsHTML() : '') +
    '<div class="soro-rods">' + rods + '</div></section></div>';
}
function soroSettingsHTML() {
  const vi = progress.lang === 'vi';
  const cols = [3, 5, 7, 9, 13];
  const colors = [
    { id: 'black', vi: 'Đen', en: 'Black', hex: '#111' },
    { id: 'white', vi: 'Trắng', en: 'White', hex: '#f7f4ee' }
  ];
  const cur = progress.soroCols || 5;
  const colBtns = cols.map(function (n) {
    return '<button type="button" class="soro-opt' + (n === cur ? ' on' : '') + '" data-act="soro-cols" data-n="' + n + '">' + n + '</button>';
  }).join('');
  const colorBtns = colors.map(function (c) {
    const on = (progress.soroColor || 'black') === c.id ? ' on' : '';
    return '<button type="button" class="swatch' + on + '" style="background:' + c.hex + '" data-act="soro-color" data-id="' + c.id + '" aria-label="' + esc(vi ? c.vi : c.en) + '"></button>';
  }).join('');
  return '<div class="soro-set"><p>' + (vi ? 'Số cột' : 'Columns') + '</p><div class="soro-opts">' + colBtns + '</div>' +
    '<p>' + (vi ? 'Màu hạt' : 'Bead color') + '</p><div class="soro-swatches">' + colorBtns + '</div></div>';
}
function soroHelpHTML() {
  const vi = progress.lang === 'vi';
  const blocks = vi ? [
    ['Đọc số', 'Chỉ hạt chạm thanh gỗ giữa mới được tính. Hạt trên chạm thanh = 5. Mỗi hạt dưới chạm thanh = 1. Cột phải cùng là hàng đơn vị, cột bên trái là hàng chục, rồi đến trăm.', 'Ví dụ: cột đơn vị có hạt trên và 2 hạt dưới chạm thanh. Đó là 5 + 2 = 7.'],
    ['Cộng, khi còn đủ hạt', 'Đẩy thêm hạt vào thanh giữa.', '2 + 1: đặt 2 hạt dưới. Đẩy thêm 1 hạt dưới. Thành 3.'],
    ['Cộng, hết hạt dưới — bạn của 5', 'Nếu không còn đủ hạt dưới, dùng bạn của 5. +1 = +5 − 4. +2 = +5 − 3. +3 = +5 − 2. +4 = +5 − 1.', '2 + 3: đặt 2. Không đủ 3 hạt dưới. Đẩy hạt trên xuống (cộng 5), rồi kéo 2 hạt dưới ra (trừ 2). Còn 5. Đúng, vì 2 + 3 = 5.'],
    ['Cộng, qua hàng chục — bạn của 10', '+1 = +10 − 9. +2 = +10 − 8. Cứ thế đến +9 = +10 − 1. Cộng ở cột bên trái, trừ lại ở cột này.', '9 + 1: cột đơn vị đang là 9. Sang cột chục đẩy 1 hạt dưới (cộng 10). Ở cột đơn vị kéo hết hạt ra (trừ 9). Còn 10.'],
    ['Trừ, khi còn hạt để kéo', 'Kéo hạt ra khỏi thanh giữa.', '8 − 3: 8 là hạt trên và 3 hạt dưới. Kéo 3 hạt dưới ra. Còn hạt trên, là 5.'],
    ['Trừ, không đủ hạt — làm ngược', '−1 = −5 + 4. −2 = −5 + 3. −3 = −5 + 2. −4 = −5 + 1. Nếu phải mượn hàng chục: −1 = −10 + 9, −5 = −10 + 5.', '5 − 3: chỉ có hạt trên. Kéo hạt trên ra (trừ 5), đẩy 2 hạt dưới vào (cộng 2). Còn 2. Đúng, vì 5 − 3 = 2.'],
    ['Nhân một chữ số', 'Nhân từng hàng. Hàng chục nhân trước, hàng đơn vị nhân sau. Nếu một hàng ra từ 10 trở lên, phần chục sang cột bên trái, phần đơn vị ở lại cột này.', '6 × 7 = 42. Cột đang nhân đặt 2. Cột bên trái thêm 4. Không nhét 42 vào một cột.'],
    ['Nhân nhiều chữ số', 'Tách số sau thành chục và đơn vị. Nhân từng phần, rồi cộng các tích lại. Làm từ trái sang phải.', '12 × 13. 12 × 10 = 120: đặt 1 ở cột trăm, 2 ở cột chục. 12 × 3 = 36: cộng 3 vào cột chục và 6 vào cột đơn vị. 120 + 36 = 156.'],
    ['Nhân, khi một cột không đủ hạt', 'Tích riêng vẫn dùng bạn của 5 và bạn của 10. Không đoán. Đặt phần chục sang cột trái, phần còn lại ở cột này.', '4 × 4 = 16. Cột này không đủ 6 hạt dưới nếu đã có hạt khác. Đặt 1 ở cột trái, rồi đặt 6 ở cột này, hoặc cộng 16 vào số đang có.'],
    ['Chia, lấy từng hàng', 'Nhìn từ trái. Hỏi số chia vừa mấy lần trong các chữ số đầu. Đặt thương ở cột đó, rồi trừ tích đi. Chữ số tiếp theo hạ xuống và làm lại.', '84 ÷ 4. 4 vừa 8 đúng 2 lần: đặt 2 ở cột chục, trừ 8. Còn 4 ở cột đơn vị. 4 vừa 4 đúng 1 lần: đặt 1, trừ 4. Thương là 21, dư 0.'],
    ['Chia, khi chữ số đầu nhỏ hơn', 'Nếu chữ số đầu nhỏ hơn số chia, lấy hai chữ số cùng lúc. Thương bắt đầu ở cột của chữ số thứ hai, không đặt 0 nhầm cột.', '14 ÷ 4. Số 1 nhỏ hơn 4, nên xét 14. 4 × 3 = 12. Đặt 3 ở cột đơn vị, trừ 12. Còn 2. Thương 3, dư 2.'],
    ['Chia có dư', 'Dư là hạt còn lại sau khi không trừ thêm một lần nữa mà vẫn không âm. Dư phải nhỏ hơn số chia.', '20 ÷ 6. 6 × 3 = 18. Đặt 3, trừ 18. Còn 2. 2 < 6, nên dừng. Thương 3, dư 2.']
  ] : [
    ['Read a number', 'Only beads touching the middle bar count. The top bead against the bar is 5. Each bottom bead against the bar is 1. The right column is ones, then tens, then hundreds.', 'Example: top bead and 2 bottom beads touching the bar in the ones column is 5 + 2 = 7.'],
    ['Add, when beads are free', 'Slide more beads to the bar.', '2 + 1: set 2 bottom beads. Slide 1 more up. That is 3.'],
    ['Add, no bottom beads left — friends of 5', '+1 = +5 − 4. +2 = +5 − 3. +3 = +5 − 2. +4 = +5 − 1.', '2 + 3: set 2. Not enough bottom beads. Slide the top bead down (add 5), then slide 2 bottom beads away (subtract 2). Left with 5.'],
    ['Add, across a ten — friends of 10', '+1 = +10 − 9, up to +9 = +10 − 1. Add on the column to the left, then take the extra off this column.', '9 + 1: ones shows 9. On the tens column slide 1 bottom bead up (add 10). Clear the ones column (subtract 9). Left with 10.'],
    ['Subtract, when beads are there', 'Slide beads away from the bar.', '8 − 3: 8 is the top bead plus 3 bottom beads. Slide those 3 away. The top bead remains: 5.'],
    ['Subtract, not enough beads — go backwards', '−1 = −5 + 4. −3 = −5 + 2. Across a ten: −5 = −10 + 5.', '5 − 3: only the top bead is set. Slide it away (subtract 5), then slide 2 bottom beads in (add 2). Left with 2.'],
    ['Multiply by one digit', 'Multiply one place at a time. Tens first, then ones. If a place is 10 or more, the tens go on the column to the left and the ones stay here.', '6 × 7 = 42. Set 2 on the column you are multiplying. Add 4 on the column to its left. Do not try to put 42 on one rod.'],
    ['Multiply larger numbers', 'Split the second number into tens and ones. Multiply each part, then add the products. Work from the left.', '12 × 13. 12 × 10 = 120: set 1 on the hundreds rod and 2 on the tens rod. 12 × 3 = 36: add 3 on the tens rod and 6 on the ones rod. 120 + 36 = 156.'],
    ['Multiply when a rod is full', 'A partial product still uses the friends of 5 and the friends of 10. Do not guess. Put the tens on the left rod and the rest on this rod.', '4 × 4 = 16. This rod may not have 6 free bottom beads. Set 1 on the rod to the left, then set 6 here, or add 16 onto the number already showing.'],
    ['Divide, one place at a time', 'Start at the left. Ask how many times the divisor fits in the first digits. Set that quotient on that column, then subtract the product. Bring down the next digit and repeat.', '84 ÷ 4. 4 fits in 8 exactly 2 times: set 2 on the tens rod and subtract 8. The ones digit 4 remains. 4 fits in 4 once: set 1 and subtract 4. Quotient 21, remainder 0.'],
    ['Divide when the first digit is too small', 'If the first digit is smaller than the divisor, take the first two digits together. The quotient starts on the column of the second digit. Do not put a 0 on the wrong rod.', '14 ÷ 4. 1 is smaller than 4, so use 14. 4 × 3 = 12. Set 3 on the ones rod and subtract 12. 2 remains. Quotient 3, remainder 2.'],
    ['Divide with a remainder', 'The remainder is what is left when you cannot subtract another full divisor without going below 0. It must be smaller than the divisor.', '20 ÷ 6. 6 × 3 = 18. Set 3 and subtract 18. 2 remains. 2 is smaller than 6, so stop. Quotient 3, remainder 2.']
  ];
  const body = blocks.map(function (b) {
    return '<h3>' + esc(b[0]) + '</h3><p>' + esc(b[1]) + '</p><p class="ex">' + esc(b[2]) + '</p>';
  }).join('');
  return '<aside class="soro-help"><h2>' + (vi ? 'Cách dùng bàn tính' : 'How to use the abacus') + '</h2>' + body +
    '<button type="button" class="textbtn" data-act="soro-help">' + (vi ? 'Đóng hướng dẫn' : 'Close help') + '</button></aside>';
}
let tenTimer = 0;
function tenLater(fn, ms) {
  clearTimeout(tenTimer);
  tenTimer = setTimeout(fn, ms);
}
function shuffleNums(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}
function bondChoices(friend) {
  const choices = [friend];
  while (choices.length < 3) {
    const n = 1 + Math.floor(Math.random() * 9);
    if (choices.indexOf(n) < 0) choices.push(n);
  }
  return shuffleNums(choices);
}
function startTen(reset) {
  const prev = state.ten || {};
  const world = prev.world && prev.world !== 'hub' ? prev.world : 'frame';
  let need = 1 + Math.floor(Math.random() * 9);
  if (world === 'feed') need = 2 + Math.floor(Math.random() * 6);
  const friend = 10 - need;
  const next = {
    world: world,
    need: need,
    friend: friend,
    streak: reset ? 0 : (prev.streak || 0),
    flash: '',
    picked: null
  };
  if (world === 'lock' || world === 'potion') {
    let dial = Math.floor(Math.random() * 11);
    if (dial === friend) dial = (dial + 3) % 11;
    next.dial = dial;
  }
  if (world === 'grow') {
    next.left = 0;
    next.right = 0;
    progress.tenGarden = progress.tenGarden || [];
  }
  if (world === 'judge') {
    const truth = Math.random() < 0.5;
    let other = friend;
    if (!truth) {
      other = (friend + 1 + Math.floor(Math.random() * 3)) % 11;
      if (need + other === 10) other = (other + 2) % 11;
    }
    next.claim = other;
    next.claimTrue = need + other === 10;
  }
  state.ten = next;
}
function tenWords(n) {
  const vi = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười'];
  const en = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  return (progress.lang === 'vi' ? vi : en)[n] || String(n);
}
function tenLine(kind) {
  const g = state.ten || {};
  const vi = progress.lang === 'vi';
  const name = progress.name || (vi ? 'bạn nhỏ' : 'friend');
  const n = tenWords(g.need);
  const f = tenWords(g.friend == null ? (10 - g.need) : g.friend);
  if (kind === 'yes') {
    const flavor = {
      lock: vi ? 'Rương mở rồi! ' : 'The treasure opened! ',
      grow: vi ? 'Con tự nghĩ ra một cặp mới! ' : 'You invented a new pair! ',
      judge: g.caughtTrick ? (vi ? 'Con bắt được cáo nói dối! ' : 'You caught the fox! ') : (vi ? 'Con nghe đúng! ' : 'You heard the truth! '),
      potion: vi ? 'Thuốc biến thành vàng! ' : 'The potion turned to gold! ',
      bridge: vi ? 'Ếch qua cầu rồi! ' : 'The frog crossed! '
    };
    const joy = vi
      ? [name + ' ơi, đúng rồi! ', 'Ồ ' + name + '! ', 'Đẹp quá, ' + name + '! ', 'Hoan hô ' + name + '! ', 'Giỏi lắm, ' + name + '! ']
      : ['Yes, ' + name + '! ', 'Wow, ' + name + '! ', 'Beautiful, ' + name + '! ', 'Hooray, ' + name + '! ', 'I am so proud, ' + name + '! '];
    return joy[(g.streak || 1) % 5] + (flavor[g.world] || '') + (vi ? (n + ' và ' + f + ' là bạn. Cộng lại bằng mười!') : (n + ' and ' + f + ' belong together. They make ten!'));
  }
  if (kind === 'no') {
    const miss = {
      short: vi ? 'Tấm ván ngắn quá. Ếch rơi tõm!' : 'Too short. The frog fell in!',
      long: vi ? 'Tấm ván dài quá. Không vừa cầu.' : 'Too long. It will not fit the bridge.',
      much: vi ? 'Rót nhiều quá. Thuốc sôi trào!' : 'Too much. The potion boiled over!',
      less: vi ? 'Rót ít quá. Thuốc chưa đủ.' : 'Not enough. The potion is still sleepy.',
      dup: vi ? 'Cặp này con trồng rồi. Nghĩ một cách khác.' : 'You already grew that pair. Think of a new way.',
      sum: vi ? 'Hai số này chưa thành mười.' : 'Those two do not make ten yet.',
      fox: vi ? 'Cáo đang đánh lừa. Nghe lại câu đó.' : 'The fox is tricking you. Listen again.'
    };
    return miss[g.hint] || (vi ? 'Chưa phải. Nghĩ lại xem hai số có thành mười không.' : 'Not yet. Think whether the two numbers make ten.');
  }
  if (kind === 'almost') return vi ? 'Gần rồi! Xoay thêm một chút.' : 'So close! Turn a little more.';
  const lead = {
    lock: vi ? 'Xoay bánh xe. Hai số phải thành mười. ' : 'Turn the wheel. The two numbers must make ten. ',
    grow: vi ? 'Tự nghĩ hai số cộng thành mười. Trồng một cặp mới. ' : 'Think of two numbers that make ten. Plant a new pair. ',
    judge: vi ? 'Cáo nói ' + n + ' cộng ' + tenWords(g.claim) + ' bằng mười. Có đúng không? ' : 'The fox says ' + n + ' plus ' + tenWords(g.claim) + ' is ten. Is that true? ',
    potion: vi ? 'Vạc có ' + n + '. Chọn bạn, rồi mới rót. ' : 'The cauldron has ' + n + '. Choose the friend, then pour. ',
    bridge: vi ? 'Cầu cần mười tấm. Đã có ' + n + '. Chọn tấm ván vừa khuyết. ' : 'The bridge needs ten planks. ' + n + ' are down. Choose the plank that finishes it. '
  };
  return lead[g.world] || (vi ? 'Số nào cộng thành mười?' : 'Which number makes ten?');
}
function sayTen(kind) {
  const k = kind || 'ask';
  if (k !== 'yes' && !progress.read) return;
  const excited = k === 'yes';
  speak(tenLine(k), progress.lang, excited ? 0.96 : 0.88, excited ? 1.16 : 1.04);
}
function winTen() {
  const g = state.ten;
  if (!g) return;
  g.flash = 'yes';
  g.streak = (g.streak || 0) + 1;
  progress.tenBest = Math.max(progress.tenBest || 0, g.streak);
  save();
  if (progress.sound) chime();
  sayTen('yes');
  render();
  tenLater(function () {
    if (state.screen !== 'tenplay') return;
    startTen(false);
    render();
    sayTen('ask');
  }, 2200);
}
function pickTen(n) {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  g.picked = n;
  if (n === g.friend || n === 10 - g.need) winTen();
  else {
    g.flash = 'no';
    if (progress.sound) beep(180, 0.1, 'triangle');
    sayTen('no');
    render();
  }
}
function plantTen() {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  const a = g.left || 0;
  const b = g.right || 0;
  if (a + b !== 10) {
    g.flash = 'no';
    g.hint = 'sum';
    sayTen('no');
    render();
    return;
  }
  const key = Math.min(a, b) + '-' + Math.max(a, b);
  progress.tenGarden = progress.tenGarden || [];
  if (progress.tenGarden.indexOf(key) >= 0) {
    g.flash = 'no';
    g.hint = 'dup';
    sayTen('no');
    render();
    return;
  }
  progress.tenGarden.push(key);
  g.need = a;
  g.friend = b;
  save();
  if (progress.tenGarden.length >= 6) winTen();
  else {
    g.flash = 'yes';
    g.streak = (g.streak || 0) + 1;
    if (progress.sound) chime();
    sayTen('yes');
    render();
    tenLater(function () {
      if (!state.ten) return;
      state.ten.flash = '';
      state.ten.left = 0;
      state.ten.right = 0;
      render();
      sayTen('ask');
    }, 1800);
  }
}
function judgeTen(yes) {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  if (yes === !!g.claimTrue) {
    g.friend = 10 - g.need;
    g.caughtTrick = !g.claimTrue;
    winTen();
  } else {
    g.flash = 'no';
    g.hint = 'fox';
    sayTen('no');
    render();
  }
}
function pourTen() {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  const n = g.dial || 0;
  if (n === g.friend) winTen();
  else {
    g.flash = 'no';
    g.hint = n > g.friend ? 'much' : 'less';
    if (progress.sound) beep(160, 0.12, 'triangle');
    sayTen('no');
    render();
  }
}
function plankTen(n) {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  g.picked = n;
  if (n === g.friend) winTen();
  else {
    g.flash = 'no';
    g.hint = n < g.friend ? 'short' : 'long';
    if (progress.sound) beep(180, 0.1, 'triangle');
    sayTen('no');
    render();
  }
}
function dialTen(dir) {
  const g = state.ten;
  if (!g || g.flash === 'yes') return;
  g.dial = Math.max(0, Math.min(10, (g.dial || 0) + dir));
  g.flash = '';
  if (g.world !== 'potion' && g.need + g.dial === 10) {
    g.friend = g.dial;
    winTen();
    return;
  }
  if (Math.abs(g.need + g.dial - 10) === 1) sayTen('almost');
  if (progress.sound) beep(360 + g.dial * 18, 0.04);
  render();
}
function flipTen(i) {
  const g = state.ten;
  if (!g || g.lock || g.flash === 'yes') return;
  const card = g.cards[i];
  if (!card || card.up || card.gone) return;
  card.up = true;
  g.open = g.open || [];
  g.open.push(i);
  if (g.open.length < 2) { render(); return; }
  const a = g.cards[g.open[0]];
  const b = g.cards[g.open[1]];
  if (a.n + b.n === 10) {
    a.gone = true;
    b.gone = true;
    g.need = a.n;
    g.friend = b.n;
    g.open = [];
    g.pairs = (g.pairs || 0) + 1;
    if (progress.sound) chime();
    if (g.pairs >= 3) winTen();
    else {
      sayTen('yes');
      render();
    }
    return;
  }
  g.lock = true;
  sayTen('no');
  render();
  tenLater(function () {
    if (!state.ten || !state.ten.cards) return;
    a.up = false;
    b.up = false;
    state.ten.open = [];
    state.ten.lock = false;
    render();
  }, 800);
}
function berryDots(n) {
  let s = '';
  for (let i = 0; i < n; i++) s += '🍓';
  return s || '·';
}
function tenShell(inner, msg, g, vi) {
  const best = progress.tenBest || 0;
  return '<div class="wrap">' + topHTML() +
    '<div class="playtop"><button type="button" class="pill" data-act="ten-hub">' + esc(ui('back')) + '</button><strong>' + esc(ui('tenPlay')) + '</strong><span>' + (vi ? 'Bạn tìm được ' : 'Friends ') + (g.streak || 0) + (best ? ' · ' + best : '') + '</span>' +
    '<button type="button" class="pill on" data-act="ten-hear">' + (vi ? 'Nghe lại' : 'Hear again') + '</button></div>' +
    '<div class="tenworld"><div class="ten-play theme-' + g.world + (g.flash === 'yes' ? ' party' : '') + '">' + inner + '</div>' +
    '<p class="ten-msg ' + (g.flash || '') + '">' + esc(msg) + '</p></div></div>';
}
function renderTen() {
  const g = state.ten || { world: 'hub', need: 7, choices: [], streak: 0, flash: '' };
  const vi = progress.lang === 'vi';
  if (!g.world || g.world === 'hub') {
    const games = [
      ['lock', '🔐', vi ? 'Ổ khóa kho báu' : 'Treasure lock', vi ? 'Xoay đến khi hai số thành 10. Khóa tự mở.' : 'Turn until the two numbers make 10. The lock opens itself.'],
      ['grow', '🌱', vi ? 'Trồng cặp mới' : 'Grow a pair', vi ? 'Tự nghĩ một cặp thành 10. Cặp cũ không tính.' : 'Invent a pair that makes 10. Old pairs do not count.'],
      ['judge', '🦊', vi ? 'Bắt cáo nói dối' : 'Catch the fox', vi ? 'Nghe câu của cáo. Đúng hay sai?' : 'Hear the fox. True or false?'],
      ['potion', '🧪', vi ? 'Rót một lần' : 'One pour', vi ? 'Chọn số bạn, rồi mới rót. Rót sai là trào.' : 'Choose the friend, then pour. A wrong pour spills.'],
      ['bridge', '🐸', vi ? 'Bắc cầu cho ếch' : 'Frog bridge', vi ? 'Chọn tấm ván vừa khuyết. Ngắn thì rơi, dài thì không vừa.' : 'Choose the plank that fits. Too short falls. Too long will not fit.']
    ];
    const cards = games.map(function (gm) {
      return '<button type="button" class="ten-card" data-act="ten-world" data-w="' + gm[0] + '"><b>' + gm[1] + '</b><strong>' + esc(gm[2]) + '</strong><small>' + esc(gm[3]) + '</small></button>';
    }).join('');
    return '<div class="wrap">' + topHTML() +
      '<div class="playtop"><button type="button" class="pill" data-act="intro">' + esc(ui('back')) + '</button><strong>' + esc(ui('tenPlay')) + '</strong></div>' +
      '<p class="ten-msg">' + esc(vi ? 'Chọn một trò. Máy sẽ đọc câu hỏi.' : 'Pick a game. The question will be read aloud.') + '</p>' +
      '<div class="ten-hub">' + cards + '</div></div>';
  }
  const msg = g.flash === 'yes' ? tenLine('yes') : (g.flash === 'no' ? tenLine('no') : tenLine('ask'));
  let inner = '';
  if (g.world === 'lock') {
    const sum = g.need + (g.dial || 0);
    const gems = g.flash === 'yes' ? '<div class="gems">💎✨👑✨💎</div>' : '';
    inner = gems + '<div class="chest">' + (g.flash === 'yes' ? '🎁' : '🔐') + '</div><div class="dial"><b>' + g.need + '</b><span>+</span><b>' + (g.dial || 0) + '</b><span>=</span><b class="' + (sum === 10 ? 'full' : '') + '">' + sum + '</b></div>' +
      '<div class="dialbtns"><button type="button" data-act="ten-dial" data-dir="-1">−</button><button type="button" data-act="ten-dial" data-dir="1">+</button></div>';
  } else if (g.world === 'grow') {
    const grown = (progress.tenGarden || []).map(function (k) { return '<i>' + k.replace('-', '+') + '</i>'; }).join('');
    inner = '<div class="garden-row">' + (grown || '<i>·</i>') + '</div><div class="dial"><button type="button" data-act="ten-side" data-side="left" data-dir="-1">−</button><b>' + (g.left || 0) + '</b><button type="button" data-act="ten-side" data-side="left" data-dir="1">+</button><span>+</span><button type="button" data-act="ten-side" data-side="right" data-dir="-1">−</button><b>' + (g.right || 0) + '</b><button type="button" data-act="ten-side" data-side="right" data-dir="1">+</button></div>' +
      '<button type="button" class="give" data-act="ten-plant">' + (vi ? 'Trồng cặp này' : 'Plant this pair') + '</button>';
  } else if (g.world === 'judge') {
    inner = '<div class="fox">' + (g.flash === 'yes' ? '🎉' : '🦊') + '</div><p class="claim">' + g.need + ' + ' + g.claim + ' = 10?</p>' +
      '<div class="dialbtns"><button type="button" data-act="ten-judge" data-yes="1">' + (vi ? 'Đúng' : 'True') + '</button><button type="button" data-act="ten-judge" data-yes="0">' + (vi ? 'Sai' : 'False') + '</button></div>';
  } else if (g.world === 'potion') {
    inner = '<div class="chest">' + (g.flash === 'yes' ? '✨' : (g.flash === 'no' ? '💥' : '🧪')) + '</div><p class="claim">' + g.need + ' + ' + (g.dial || 0) + '</p>' +
      '<div class="dialbtns"><button type="button" data-act="ten-dial" data-dir="-1">−</button><button type="button" data-act="ten-dial" data-dir="1">+</button></div>' +
      '<button type="button" class="give" data-act="ten-pour">' + (vi ? 'Rót!' : 'Pour!') + '</button>';
  } else if (g.world === 'bridge') {
    let slots = '';
    for (let i = 0; i < 10; i++) slots += '<i class="' + (i < g.need ? 'on' : 'gap') + '"></i>';
    let keys = '';
    for (let n = 0; n <= 9; n++) keys += '<button type="button" data-act="ten-plank" data-n="' + n + '">' + n + '</button>';
    inner = '<div class="frog">' + (g.flash === 'yes' ? '🐸✨' : (g.hint === 'short' ? '💦' : '🐸')) + '</div><div class="bridge">' + slots + '</div><div class="keys">' + keys + '</div>';
  } else {
    inner = '<div class="chest">🔐</div>';
  }
  return tenShell(inner, msg, g, vi);
}
function ensureWood() {
  if (!state.wood || state.wood.length !== 13) {
    state.wood = [];
    for (let i = 0; i < 13; i++) state.wood.push({ heaven: false, earth: 0 });
  }
}
function woodValue() {
  ensureWood();
  let n = 0;
  for (let i = 0; i < 13; i++) {
    if (state.wood[i].earth > 4) state.wood[i].earth = 4;
    const v = (state.wood[i].heaven ? 5 : 0) + state.wood[i].earth;
    n += v * Math.pow(10, 12 - i);
  }
  return n;
}
function woodMetrics() {
  const beadH = 32;
  const step = 34;
  const beamH = 14;
  const topPad = 6;
  const beamTop = topPad + step + beadH;
  const earthUp = beamTop + beamH + 3;
  const rodH = earthUp + step + 4 * beadH + 3 * 2 + 6;
  return { beadH: beadH, step: step, beamH: beamH, beamTop: beamTop, earthUp: earthUp, rodH: rodH, topPad: topPad };
}
function woodHeavenY(on, m) {
  return on ? m.beamTop - m.beadH - 2 : m.topPad;
}
function woodEarthY(b, counted, m) {
  return m.earthUp + (counted ? 0 : m.step) + b * m.step;
}
function woodHTML() {
  if (!state.woodOpen) return '';
  ensureWood();
  const m = woodMetrics();
  const vi = progress.lang === 'vi';
  const rods = state.wood.map(function (rod, i) {
    const dot = (12 - i) % 3 === 0 ? '<i></i>' : '';
    let beads = '<button type="button" class="wood-bead" data-act="wood-heaven" data-rod="' + i + '" style="top:' + woodHeavenY(rod.heaven, m) + 'px"></button>';
    for (let b = 0; b < 4; b++) {
      beads += '<button type="button" class="wood-bead" data-act="wood-earth" data-rod="' + i + '" data-bead="' + b + '" style="top:' + woodEarthY(b, b < rod.earth, m) + 'px"></button>';
    }
    return '<div class="wood-rod">' + beads + '<div class="wood-beam" style="top:' + m.beamTop + 'px">' + dot + '</div></div>';
  }).join('');
  return '<div class="wood-win" role="dialog" aria-label="soroban"><section class="wood-board">' +
    '<i class="wood-brass tl"></i><i class="wood-brass tr"></i><i class="wood-brass bl"></i><i class="wood-brass br"></i>' +
    '<button type="button" class="wood-bookbtn" data-act="wood-book">Sách</button>' +
    '<button type="button" class="wood-x" data-act="wood-toggle" aria-label="' + (vi ? 'Đóng' : 'Close') + '">×</button>' +
    '<span class="wood-num">' + woodValue().toLocaleString(vi ? 'vi-VN' : 'en-US') + '</span>' +
    '<div class="wood-rods" style="height:' + m.rodH + 'px">' + rods + '</div></section></div>' +
    (state.woodBook ? woodBookHTML() : '');
}
function woodBeadMark(cx, cy) {
  return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="15" ry="8" fill="#111"/>' +
    '<ellipse cx="' + (cx - 4) + '" cy="' + (cy - 2) + '" rx="5" ry="2.2" fill="#666"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="2.1" fill="#e8c48a"/>';
}
function woodFig(cols, caption) {
  const n = cols.length;
  const bw = 54;
  const W = 28 + n * bw;
  const H = 214;
  let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img"><rect x="3" y="3" width="' + (W - 6) + '" height="188" rx="3" fill="#e7b56d" stroke="#a86a32" stroke-width="7"/>';
  s += '<rect x="16" y="78" width="' + (W - 32) + '" height="10" fill="#f3d7a2" stroke="#8a5a28"/>';
  cols.forEach(function (c, i) {
    const cx = 22 + i * bw + 22;
    s += '<line x1="' + cx + '" y1="18" x2="' + cx + '" y2="178" stroke="#f6e2c0" stroke-width="3"/>';
    s += woodBeadMark(cx, c.h ? 62 : 28);
    for (let b = 0; b < 4; b++) {
      const y = b < c.e ? (96 + b * 16) : (132 + b * 14);
      s += woodBeadMark(cx, y);
    }
    s += '<text x="' + cx + '" y="206" text-anchor="middle" font-size="12" font-family="Segoe UI, sans-serif" fill="#3a2410">' + (c.lab || '') + '</text>';
  });
  s += '</svg>';
  return '<figure class="wood-fig">' + s + '<figcaption>' + esc(caption) + '</figcaption></figure>';
}
function woodBookHTML() {
  const chapters = [
    {
      title: '1. Đọc số',
      body: '<p>Chỉ hạt <b>chạm thanh gỗ giữa</b> mới được tính. Hạt nằm xa thanh là 0.</p>' +
        '<p>Hạt trên chạm thanh = <b>5</b>. Mỗi hạt dưới chạm thanh = <b>1</b>. Một cột nhiều nhất là 9, vì 5 + 4 = 9.</p>' +
        '<p>Cột ngoài cùng bên phải là hàng đơn vị. Cột bên trái kế đó là hàng chục, rồi đến trăm, nghìn. Chấm đồng trên thanh đánh dấu hàng đơn vị và hàng nghìn.</p>' +
        woodFig([{ h: 0, e: 0, lab: 'đơn vị' }], 'Tất cả hạt xa thanh. Đây là 0.') +
        woodFig([{ h: 1, e: 2, lab: 'đơn vị' }], 'Hạt trên và 2 hạt dưới chạm thanh: 5 + 2 = 7.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 0, lab: 'đơn vị' }], 'Một hạt dưới ở cột chục. Đó là 10.') +
        woodFig([{ h: 0, e: 3, lab: 'chục' }, { h: 1, e: 1, lab: 'đơn vị' }], '3 ở cột chục là 30. Hạt trên và 1 hạt dưới ở cột đơn vị là 6. Thành 36.') +
        '<p class="ex">Mẹo: đọc từ trái sang phải. Nói to “ba chục và sáu” trước khi nói 36.</p>'
    },
    {
      title: '2. Cộng, còn hạt',
      body: '<p>Nếu cột còn hạt dưới chưa chạm thanh, hãy đẩy thêm hạt vào thanh. Không cần mẹo.</p>' +
        woodFig([{ h: 0, e: 2, lab: 'đơn vị' }], 'Bắt đầu: 2.') +
        woodFig([{ h: 0, e: 3, lab: 'đơn vị' }], '2 + 1: đẩy thêm 1 hạt dưới. Thành 3.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 3, lab: 'đơn vị' }], '13 là 1 ở cột chục và 3 ở cột đơn vị.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 4, lab: 'đơn vị' }], '13 + 1: cột đơn vị còn 1 hạt dưới. Đẩy nó lên. Thành 14.') +
        '<p class="ex">Mẹo: đếm hạt sắp đẩy, đừng đếm lại cả cột nếu bạn đã biết số cũ.</p>'
    },
    {
      title: '3. Cộng — bạn của 5',
      body: '<p>Khi không còn đủ hạt dưới, dùng bạn của 5.</p>' +
        '<p>+1 = +5 − 4. +2 = +5 − 3. +3 = +5 − 2. +4 = +5 − 1.</p>' +
        '<p>Nói to câu này trước khi kéo hạt: “cộng 5, trả lại phần thừa.”</p>' +
        woodFig([{ h: 0, e: 2, lab: 'đơn vị' }], '2 + 3. Đang có 2. Không đủ 3 hạt dưới.') +
        woodFig([{ h: 1, e: 2, lab: 'đơn vị' }], 'Đẩy hạt trên xuống: cộng 5. Tạm thành 7.') +
        woodFig([{ h: 1, e: 0, lab: 'đơn vị' }], 'Kéo 2 hạt dưới ra: trừ 2. Còn hạt trên, là 5. Đúng, vì 2 + 3 = 5.') +
        woodFig([{ h: 0, e: 4, lab: 'đơn vị' }], '4 + 1. +1 = +5 − 4. Hạt trên xuống, kéo hết 4 hạt dưới ra.') +
        woodFig([{ h: 1, e: 0, lab: 'đơn vị' }], 'Còn 5. Đúng.') +
        '<p class="ex">Mẹo: hai số cộng thành 5 là bạn của nhau: 1 với 4, 2 với 3.</p>'
    },
    {
      title: '4. Cộng — bạn của 10',
      body: '<p>Khi cột này không chứa nổi phép cộng, sang cột bên trái cộng 1 chục, rồi trả lại phần thừa ở cột này.</p>' +
        '<p>+1 = +10 − 9. +2 = +10 − 8. +3 = +10 − 7. +4 = +10 − 6. +5 = +10 − 5. +6 = +10 − 4. +7 = +10 − 3. +8 = +10 − 2. +9 = +10 − 1.</p>' +
        woodFig([{ h: 1, e: 4, lab: 'đơn vị' }], '9 + 1. Cột đơn vị đang là 9. Không thêm được hạt nào.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 1, e: 4, lab: 'đơn vị' }], 'Cột chục đẩy 1 hạt dưới: cộng 10. Tạm thành 19.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 0, lab: 'đơn vị' }], 'Cột đơn vị kéo hết hạt ra: trừ 9. Còn 10. Đúng, vì 9 + 1 = 10.') +
        woodFig([{ h: 1, e: 3, lab: 'đơn vị' }], '8 + 6. 8 cần 2 để thành 10, mà 6 là 2 và 4. Cách trên bàn: +6 = +10 − 4.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 4, lab: 'đơn vị' }], 'Cộng 10 ở cột chục, rồi trừ 4 ở cột đơn vị. 8 − 4 = 4. Thành 14.') +
        '<p class="ex">Mẹo: nói “cộng mười, trả bốn” trước khi tay kéo. Tay sẽ không kéo nhầm chiều.</p>'
    },
    {
      title: '5. Trừ, còn hạt',
      body: '<p>Nếu hạt đang chạm thanh đủ để kéo ra, hãy kéo ra. Đó là trừ thẳng.</p>' +
        woodFig([{ h: 1, e: 3, lab: 'đơn vị' }], '8 là hạt trên và 3 hạt dưới.') +
        woodFig([{ h: 1, e: 0, lab: 'đơn vị' }], '8 − 3: kéo 3 hạt dưới ra. Còn hạt trên, là 5.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 4, lab: 'đơn vị' }], '14 − 2: cột đơn vị có 4 hạt. Kéo 2 hạt ra.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 2, lab: 'đơn vị' }], 'Còn 12.') +
        '<p class="ex">Mẹo: trừ thẳng chỉ khi hạt đang chạm thanh nhiều hơn hoặc bằng số cần trừ.</p>'
    },
    {
      title: '6. Trừ, không đủ hạt',
      body: '<p>Làm ngược bạn của 5 hoặc bạn của 10.</p>' +
        '<p>−1 = −5 + 4. −2 = −5 + 3. −3 = −5 + 2. −4 = −5 + 1.</p>' +
        '<p>Qua hàng chục: −1 = −10 + 9, −4 = −10 + 6, −6 = −10 + 4.</p>' +
        woodFig([{ h: 1, e: 0, lab: 'đơn vị' }], '5 − 2. Chỉ có hạt trên. −2 = −5 + 3.') +
        woodFig([{ h: 0, e: 3, lab: 'đơn vị' }], 'Kéo hạt trên ra, đẩy 3 hạt dưới vào. Còn 3. Đúng, vì 5 − 2 = 3.') +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 3, lab: 'đơn vị' }], '13 − 6. Cột đơn vị chỉ có 3, không đủ kéo 6. −6 = −10 + 4.') +
        woodFig([{ h: 0, e: 0, lab: 'chục' }, { h: 1, e: 2, lab: 'đơn vị' }], 'Kéo 1 hạt ở cột chục. Cột đơn vị thêm 4: 3 + 4 = 7. Thành 7.') +
        '<p class="ex">Mẹo: hỏi “mình lấy thừa hay lấy thiếu?” Nếu trừ 10 thay vì trừ 6, là lấy thừa 4, phải trả 4 lại.</p>'
    },
    {
      title: '7. Nhân',
      body: '<p>Nhân từng hàng, từ trái sang phải. Nếu một hàng ra từ 10 trở lên, phần chục sang cột bên trái, phần đơn vị ở lại cột này.</p>' +
        woodFig([{ h: 0, e: 1, lab: 'chục' }, { h: 0, e: 2, lab: 'đơn vị' }], '4 × 3 = 12. Không nhét 12 vào một cột. Đặt 1 ở cột chục và 2 ở cột đơn vị.') +
        '<p>12 × 3. Tách 12 thành 10 và 2.</p>' +
        woodFig([{ h: 0, e: 3, lab: 'chục' }, { h: 0, e: 0, lab: 'đơn vị' }], '10 × 3 = 30. Đặt 3 hạt dưới ở cột chục.') +
        woodFig([{ h: 0, e: 3, lab: 'chục' }, { h: 1, e: 1, lab: 'đơn vị' }], '2 × 3 = 6. Cộng 6 vào cột đơn vị. Thành 36.') +
        '<p>12 × 13. Tách 13 thành 10 và 3. Làm từ trái.</p>' +
        woodFig([{ h: 0, e: 1, lab: 'trăm' }, { h: 0, e: 2, lab: 'chục' }, { h: 0, e: 0, lab: 'đơn vị' }], '12 × 10 = 120. Đặt 1 ở cột trăm, 2 ở cột chục.') +
        woodFig([{ h: 0, e: 1, lab: 'trăm' }, { h: 1, e: 0, lab: 'chục' }, { h: 1, e: 1, lab: 'đơn vị' }], '12 × 3 = 36. Cộng 3 vào cột chục và 6 vào cột đơn vị. 120 + 36 = 156.') +
        '<p class="ex">Mẹo: 6 × 7 = 42 thì cột đang nhân chỉ giữ 2. Số 4 phải sang cột trái. Đừng cố xếp 42 trên một trục.</p>'
    },
    {
      title: '8. Chia',
      body: '<p>Chia từ trái sang phải. Hỏi số chia vừa mấy lần trong các chữ số đầu. Đặt thương ở cột đó, rồi trừ tích đi. Hạ chữ số tiếp theo và làm lại.</p>' +
        '<p>84 ÷ 4.</p>' +
        woodFig([{ h: 1, e: 3, lab: 'chục' }, { h: 0, e: 4, lab: 'đơn vị' }], 'Bắt đầu: 84. 8 ở cột chục, 4 ở cột đơn vị.') +
        woodFig([{ h: 0, e: 2, lab: 'chục' }, { h: 0, e: 4, lab: 'đơn vị' }], '4 vừa 8 đúng 2 lần. Đặt thương 2 ở cột chục, trừ 8. Còn 4 ở cột đơn vị.') +
        woodFig([{ h: 0, e: 2, lab: 'chục' }, { h: 0, e: 1, lab: 'đơn vị' }], '4 vừa 4 đúng 1 lần. Đặt 1 ở cột đơn vị, trừ 4. Thương là 21, dư 0.') +
        '<p>14 ÷ 4. Số 1 nhỏ hơn 4, nên không chia ở cột chục. Lấy cả 14.</p>' +
        woodFig([{ h: 0, e: 0, lab: 'chục' }, { h: 0, e: 3, lab: 'đơn vị' }], '4 × 3 = 12. Đặt thương 3 ở cột đơn vị. 14 − 12 = 2.') +
        '<p class="ex">Dư là hạt còn lại khi không trừ thêm một lần nữa. 20 ÷ 6: 6 × 3 = 18, đặt 3, còn 2. 2 nhỏ hơn 6 nên dừng. Thương 3, dư 2.</p>' +
        '<p class="ex">Mẹo: dư luôn nhỏ hơn số chia. Nếu dư lớn hơn hoặc bằng số chia, bạn chia thiếu một lần.</p>'
    },
    {
      title: '9. Mẹo',
      body: '<p>Xóa bàn về 0 trước mỗi bài. Số trên tấm gỗ phải là 0. Nếu không, một hạt còn chạm thanh sẽ làm sai cả bài.</p>' +
        '<p>Nói mẹo thành tiếng trước khi tay kéo. “Cộng năm, trả hai.” “Cộng mười, trả bốn.” Tay nghe miệng, ít kéo nhầm chiều.</p>' +
        '<p>Bạn của 5: 1–4, 2–3. Bạn của 10: 1–9, 2–8, 3–7, 4–6, 5–5. Thuộc sáu cặp này thì cộng trừ nhanh hơn đếm hạt.</p>' +
        '<p>Nhân và chia luôn đi từ trái sang phải. Cộng trừ một chữ số thì làm ở cột đơn vị trước, chỉ sang cột trái khi phải mượn hoặc nhớ.</p>' +
        '<p>Sau mỗi bước, đọc số trên tấm gỗ. Nếu không khớp ví dụ trong sách, dừng lại, đừng làm bước sau.</p>' +
        '<p>Mỗi ngày một ví dụ là đủ: một bài cộng bạn của 5, một bài qua hàng chục, rồi một bài nhân nhỏ. Đừng làm hết sách trong một buổi.</p>' +
        '<p class="ex">Để sách này mở bên cạnh Soroban. Làm đúng hình nào, kéo bàn gỗ thật cho khớp hình đó, rồi bấm Nghe nếu cần nghe lại câu mẹo.</p>'
    }
  ];
  const i = Math.max(0, Math.min(chapters.length - 1, state.woodChap || 0));
  const ch = chapters[i];
  const nav = chapters.map(function (c, n) {
    return '<button type="button" class="' + (n === i ? 'on' : '') + '" data-act="wood-chap" data-i="' + n + '">' + esc(c.title) + '</button>';
  }).join('');
  return '<aside class="wood-book" role="dialog" aria-label="Sách Soroban"><div class="wood-bookbar"><strong>Sách Soroban</strong>' +
    '<button type="button" data-act="wood-book">Đóng sách</button></div>' +
    '<nav>' + nav + '</nav><article><h2>' + esc(ch.title) + '</h2>' + ch.body + '</article>' +
    '<div class="wood-booknav"><button type="button" data-act="wood-chap" data-i="' + Math.max(0, i - 1) + '">Chương trước</button>' +
    '<span>' + (i + 1) + ' / ' + chapters.length + '</span>' +
    '<button type="button" data-act="wood-chap" data-i="' + Math.min(chapters.length - 1, i + 1) + '">Chương sau</button></div></aside>';
}
function paintWoodRod(i) {
  const col = document.querySelectorAll('.wood-rod')[i];
  const rod = state.wood && state.wood[i];
  if (!col || !rod) return;
  const m = woodMetrics();
  const heaven = col.querySelector('[data-act="wood-heaven"]');
  if (heaven) heaven.style.top = woodHeavenY(rod.heaven, m) + 'px';
  const beads = col.querySelectorAll('[data-act="wood-earth"]');
  for (let b = 0; b < beads.length; b++) beads[b].style.top = woodEarthY(b, b < rod.earth, m) + 'px';
  const num = document.querySelector('.wood-num');
  if (num) num.textContent = woodValue().toLocaleString(progress.lang === 'vi' ? 'vi-VN' : 'en-US');
}
function bindWood() {
  const box = document.querySelector('.wood-rods');
  if (!box || box.dataset.bound) return;
  box.dataset.bound = '1';
  const m = woodMetrics();
  let drag = null;
  box.addEventListener('pointerdown', function (e) {
    const bead = e.target.closest('.wood-bead');
    if (!bead) return;
    const col = bead.closest('.wood-rod');
    drag = {
      pointerId: e.pointerId,
      rodIndex: Array.prototype.indexOf.call(box.querySelectorAll('.wood-rod'), col),
      kind: bead.dataset.act === 'wood-heaven' ? 'heaven' : 'earth',
      bead: Number(bead.dataset.bead || 0),
      startY: e.clientY,
      startTop: parseFloat(bead.style.top) || 0,
      moved: false
    };
    try { box.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  box.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dy) < 3) return;
    drag.moved = true;
    const rod = state.wood[drag.rodIndex];
    const col = box.querySelectorAll('.wood-rod')[drag.rodIndex];
    if (!rod || !col) return;
    if (drag.kind === 'heaven') {
      const minTop = m.topPad;
      const maxTop = m.beamTop - m.beadH - 2;
      const top = Math.max(minTop, Math.min(maxTop, drag.startTop + dy));
      const el = col.querySelector('[data-act="wood-heaven"]');
      if (el) el.style.top = top + 'px';
      rod.heaven = top > (minTop + maxTop) / 2;
    } else {
      const b = drag.bead;
      const minTop = woodEarthY(b, true, m);
      const maxTop = woodEarthY(b, false, m);
      const top = Math.max(Math.min(minTop, maxTop), Math.min(Math.max(minTop, maxTop), drag.startTop + dy));
      const beads = col.querySelectorAll('[data-act="wood-earth"]');
      if (beads[b]) beads[b].style.top = top + 'px';
      const toward = top < (minTop + maxTop) / 2;
      rod.earth = toward ? Math.max(rod.earth, b + 1) : Math.min(rod.earth, b);
      for (let i = 0; i < beads.length; i++) {
        if (i === b) continue;
        beads[i].style.top = woodEarthY(i, i < rod.earth, m) + 'px';
      }
    }
    const num = document.querySelector('.wood-num');
    if (num) num.textContent = woodValue().toLocaleString(progress.lang === 'vi' ? 'vi-VN' : 'en-US');
    e.preventDefault();
  });
  function end(e) {
    if (!drag || (e && e.pointerId !== drag.pointerId)) return;
    const d = drag;
    drag = null;
    if (!d.moved) {
      const rod = state.wood[d.rodIndex];
      if (d.kind === 'heaven') rod.heaven = !rod.heaven;
      else rod.earth = d.bead < rod.earth ? d.bead : d.bead + 1;
    }
    paintWoodRod(d.rodIndex);
  }
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
}
function render() {
  if (typeof document === 'undefined') return;
  const shake = state.shake;
  document.body.className = 'screen-' + state.screen + (state.sorobanOpen ? ' soro-open' : '') + (usePhoneKeys() ? ' phone-keys' : '');
  document.documentElement.lang = progress.lang === 'vi' ? 'vi' : 'en';
  const kid = progress.name || 'Natalie';
  document.title = kid + (progress.lang === 'vi' ? ' — Vườn hát' : "'s Garden");
  const app = document.getElementById('app');
  let html = '';
  if (state.screen === 'curtain') html = renderCurtain();
  else if (state.screen === 'home') html = renderHome();
  else if (state.screen === 'intro') html = renderIntro();
  else if (state.screen === 'play') html = renderPlay();
  else if (state.screen === 'clear') html = renderClear();
  else if (state.screen === 'parents') html = renderParents();
  else if (state.screen === 'tenplay') html = renderTen();
  app.innerHTML = html + sorobanHTML() + woodHTML();
  state.shake = null;
  if (state.screen === 'play' && state.focus) {
    const el = app.querySelector('[data-slot="' + state.focus + '"]');
    if (el && el.focus) {
      el.focus();
      try { el.setSelectionRange(el.value.length, el.value.length); } catch (e) {}
    }
  }
  if (shake) {
    const el = app.querySelector('[data-slot="' + shake + '"]');
    if (el) el.classList.add('shake');
  }
  bindSoroban();
  bindWood();
  paintAllRods();
  requestAnimationFrame(paintAllRods);
}
let soroLayout = null;
function sorobanMetrics(beadH) {
  const gap = 2;
  const step = beadH + gap;
  const beamH = Math.max(10, Math.round(beadH * 0.34));
  const topPad = 4;
  const beamTop = topPad + step + beadH;
  const earthUp = beamTop + beamH + 2;
  const rodH = earthUp + step + 4 * beadH + 3 * gap + 4;
  return { beadH: beadH, gap: gap, step: step, beamH: beamH, beamTop: beamTop, earthUp: earthUp, rodH: rodH, topPad: topPad };
}
function frameSoroban() {
  const cols = (state.soroban && state.soroban.length) || 5;
  const win = document.querySelector('.soro-win');
  const board = document.querySelector('.soro-board');
  const box = document.querySelector('.soro-rods');
  const full = !!(win && win.classList.contains('full'));
  const maxW = full ? Math.min(window.innerWidth - 28, 900) : Math.min(window.innerWidth - 28, 540);
  const maxH = full ? Math.min(window.innerHeight - 36, 640) : Math.min(window.innerHeight * 0.7, 520);
  const chromeX = 22 + 32;
  const chromeY = 22 + 44;
  let colW = (maxW - chromeX) / cols;
  let beadH = Math.round(Math.min(46, Math.max(22, colW * 0.76 * 0.62)));
  let m = sorobanMetrics(beadH);
  if (m.rodH + chromeY > maxH) {
    beadH = Math.max(18, Math.floor(beadH * (maxH - chromeY) / m.rodH));
    m = sorobanMetrics(beadH);
  }
  const boardW = Math.round(colW * cols + chromeX);
  if (box) box.style.height = m.rodH + 'px';
  if (win && !full) {
    win.style.width = boardW + 'px';
    win.style.height = (m.rodH + chromeY) + 'px';
  }
  if (board && full) {
    board.style.width = Math.min(boardW, window.innerWidth - 24) + 'px';
    board.style.height = (m.rodH + 66) + 'px';
  } else if (board) {
    board.style.width = '';
    board.style.height = '';
  }
  soroLayout = m;
  return m;
}
function heavenY(on, m) {
  return on ? m.beamTop - m.beadH - 2 : m.topPad;
}
function earthY(b, counted, m) {
  return m.earthUp + (counted ? 0 : m.step) + b * m.step;
}
function paintAllRods() {
  if (!state.soroban) return;
  frameSoroban();
  for (let i = 0; i < state.soroban.length; i++) paintRod(i);
}
function paintRod(i) {
  const col = document.querySelectorAll('.soro-rod')[i];
  const rod = state.soroban[i];
  if (!col || !rod) return;
  const m = soroLayout || frameSoroban();
  const beam = col.querySelector('.beam');
  if (beam) {
    beam.style.top = m.beamTop + 'px';
    beam.style.height = m.beamH + 'px';
  }
  const beadW = Math.round(m.beadH / 0.62);
  function place(el, top) {
    el.style.width = beadW + 'px';
    el.style.height = m.beadH + 'px';
    el.style.left = '50%';
    el.style.marginLeft = (-beadW / 2) + 'px';
    el.style.top = top + 'px';
  }
  const heaven = col.querySelector('[data-act="soro-heaven"]');
  if (heaven) place(heaven, heavenY(rod.heaven, m));
  const beads = col.querySelectorAll('[data-act="soro-earth"]');
  for (let b = 0; b < beads.length; b++) place(beads[b], earthY(b, b < rod.earth, m));
  const num = document.querySelector('.soro-num');
  if (num) num.textContent = sorobanValue().toLocaleString(progress.lang === 'vi' ? 'vi-VN' : 'en-US');
}
function bindSoroban() {
  const box = document.querySelector('.soro-rods');
  if (!box || box.dataset.bound) return;
  box.dataset.bound = '1';
  let drag = null;
  box.addEventListener('pointerdown', function (e) {
    const bead = e.target.closest('.bead');
    if (!bead) return;
    const col = bead.closest('.soro-rod');
    const rods = box.querySelectorAll('.soro-rod');
    drag = {
      pointerId: e.pointerId,
      rodIndex: Array.prototype.indexOf.call(rods, col),
      kind: bead.dataset.act === 'soro-heaven' ? 'heaven' : 'earth',
      bead: Number(bead.dataset.bead || 0),
      startY: e.clientY,
      startTop: parseFloat(bead.style.top) || 0,
      moved: false
    };
    state.soroDragged = false;
    try { box.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
    e.stopPropagation();
  });
  box.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dy) < 3) return;
    drag.moved = true;
    state.soroDragged = true;
    const rod = state.soroban[drag.rodIndex];
    const col = box.querySelectorAll('.soro-rod')[drag.rodIndex];
    if (!rod || !col) return;
    const m = soroLayout || frameSoroban();
    if (drag.kind === 'heaven') {
      const minTop = 3;
      const maxTop = Math.max(minTop, m.beamTop - m.beadH - 2);
      const top = Math.max(minTop, Math.min(maxTop, drag.startTop + dy));
      const el = col.querySelector('[data-act="soro-heaven"]');
      if (el) el.style.top = top + 'px';
      const next = top > (minTop + maxTop) / 2;
      if (next !== rod.heaven) {
        rod.heaven = next;
        if (progress.sound) beep(next ? 440 : 320, 0.04);
        const num = document.querySelector('.soro-num');
        if (num) num.textContent = sorobanValue().toLocaleString(progress.lang === 'vi' ? 'vi-VN' : 'en-US');
      }
    } else {
      const b = drag.bead;
      const minTop = earthY(b, true, m);
      const maxTop = earthY(b, false, m);
      const top = Math.max(Math.min(minTop, maxTop), Math.min(Math.max(minTop, maxTop), drag.startTop + dy));
      const beads = col.querySelectorAll('[data-act="soro-earth"]');
      if (beads[b]) beads[b].style.top = top + 'px';
      const toward = top < (minTop + maxTop) / 2;
      const next = toward ? Math.max(rod.earth, b + 1) : Math.min(rod.earth, b);
      if (next !== rod.earth) {
        rod.earth = next;
        if (progress.sound) beep(340 + next * 28, 0.04);
        for (let i = 0; i < beads.length; i++) {
          if (i === b) continue;
          beads[i].style.top = earthY(i, i < rod.earth, m) + 'px';
        }
        const num = document.querySelector('.soro-num');
        if (num) num.textContent = sorobanValue().toLocaleString(progress.lang === 'vi' ? 'vi-VN' : 'en-US');
      }
    }
    e.preventDefault();
  });
  function end(e) {
    if (!drag || (e && e.pointerId !== drag.pointerId)) return;
    const d = drag;
    drag = null;
    if (!d.moved) {
      const rod = state.soroban[d.rodIndex];
      if (d.kind === 'heaven') rod.heaven = !rod.heaven;
      else rod.earth = d.bead < rod.earth ? d.bead : d.bead + 1;
      if (progress.sound) beep(380, 0.05);
    }
    paintRod(d.rodIndex);
  }
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
}

function later(fn, ms) {
  clearTimeout(timer);
  timer = setTimeout(fn, ms);
}
function goHome() {
  demoGen++;
  clearTimeout(timer);
  stopSpeak();
  state.screen = 'home';
  state.round = null;
  state.demo = false;
  state.leaveAsk = false;
  state.bubble = null;
  render();
}
function goIntro() {
  demoGen++;
  clearTimeout(timer);
  stopSpeak();
  state.screen = 'intro';
  state.demo = false;
  state.round = null;
  state.leaveAsk = false;
  render();
}
function loadCard(speakNow) {
  const p = cur();
  state.entries = blankEntries(p);
  state.focus = firstEmpty(p, state.entries);
  state.bad = {};
  state.bubble = null;
  state.recapOn = false;
  state.talked = 0;
  state.round.locked = false;
  render();
  if (speakNow && progress.read) {
    const key = (state.round.method || '') + ':' + state.round.index + ':' + (p.key || '');
    if (key !== spokenFor) {
      spokenFor = key;
      speak(t(p.coach), progress.lang);
    }
  }
}
function startRound(method, level, opts) {
  demoGen++;
  clearTimeout(timer);
  stopSpeak();
  opts = opts || {};
  if (opts.sit) progress.sit = true;
  const problems = buildRound(method, level);
  if (!problems.length) return;
  state.method = method;
  state.level = level;
  state.demo = false;
  state.screen = 'play';
  state.leaveAsk = false;
  state.streak = 0;
  state.round = { method: method, level: level, index: 0, problems: problems, wrong: 0, hints: 0, locked: false };
  save();
  loadCard(true);
}
function startDaily() {
  demoGen++;
  clearTimeout(timer);
  const rng = mulberry32(Number(dateKey().replace(/-/g, '')));
  const problems = buildDaily(rng);
  state.method = 'daily';
  state.level = 1;
  state.demo = false;
  state.screen = 'play';
  state.streak = 0;
  state.round = { method: 'daily', level: 1, index: 0, problems: problems, wrong: 0, hints: 0, locked: false };
  loadCard(true);
}
function startDemo(method) {
  demoGen++;
  clearTimeout(timer);
  stopSpeak();
  const p = demoProblem(method);
  state.method = method;
  state.level = 1;
  state.demo = true;
  state.screen = 'play';
  state.leaveAsk = false;
  state.round = { method: method, level: 0, index: 0, problems: [p], wrong: 0, hints: 0, locked: true, demoPhase: 'watch' };
  state.entries = blankEntries(p);
  state.bubble = bi('Watch.', 'Xem Pip.');
  state.recapOn = false;
  state.focus = null;
  render();
  runDemo(p);
}
function runDemo(p) {
  const gen = ++demoGen;
  const slots = slotsOf(p).filter(s => !s.pre);
  let i = 0;
  function step() {
    if (gen !== demoGen) return;
    if (i >= slots.length) {
      state.round.demoPhase = 'done';
      state.round.locked = true;
      state.recapOn = true;
      state.bubble = bi('Your turn, or play Seed.', 'Tới lượt con, hoặc chơi màn Hạt.');
      render();
      return;
    }
    const s = slots[i++];
    state.entries[s.slot] = String(s.expect);
    state.bubble = s.help;
    render();
    later(step, 900);
  }
  later(step, 600);
}
function nextCard() {
  clearTimeout(timer);
  if (!state.round || state.demo) return;
  const card = document.querySelector('.playcard');
  const go = function () {
    state.round.index++;
    if (state.round.index >= state.round.problems.length) {
      finishRound();
      const done = document.querySelector('.clearcard');
      if (done) done.classList.add('arriving');
      return;
    }
    loadCard(true);
    const next = document.querySelector('.playcard');
    if (next) next.classList.add('arriving');
  };
  if (!card) { go(); return; }
  card.classList.add('leaving');
  setTimeout(go, 280);
}
function finishRound() {
  const stars = starCount(state.round.wrong, state.round.hints);
  const key = state.round.method + '-' + state.round.level;
  progress.stars[key] = Math.max(progress.stars[key] || 0, stars);
  if (state.round.method === 'daily') {
    progress.daily[dateKey()] = Math.max(progress.daily[dateKey()] || 0, stars);
  }
  save();
  state.clear = { stars: stars, method: state.round.method, level: state.round.level };
  state.screen = 'clear';
  state.round = null;
  state.demo = false;
  if (progress.sound) chime();
  const line = progress.lang === 'vi' ? 'Xong một vòng.' : 'Round complete.';
  if (progress.read) speak(line, progress.lang);
  render();
}
function onCorrect() {
  if (state.demo) {
    state.round.locked = true;
    state.round.demoPhase = 'solved';
    state.recapOn = true;
    state.bubble = YES[0];
    if (progress.sound) chime();
    render();
    return;
  }
  state.round.locked = true;
  state.recapOn = true;
  state.bad = {};
  state.streak = (state.streak || 0) + 1;
  progress.fruit = (progress.fruit || 0) + 1;
  if (!progress.sawHow) progress.sawHow = true;
  save();
  let line = YES[(state.round.index) % YES.length];
  if (state.streak === 3) line = bi('Three in a row!', 'Ba lần liền!');
  if (state.streak === 6) line = bi('Whole basket!', 'Đầy rổ!');
  state.bubble = line;
  if (progress.sound) chime();
  if (progress.read) speak(t(line), progress.lang);
  const active = document.activeElement;
  if (active && active.blur && active.dataset && active.dataset.slot) active.blur();
  render();
  later(nextCard, 1600);
}
function check() {
  if (!state.round || state.round.locked) return;
  if (state.demo && state.round.demoPhase === 'watch') return;
  const p = cur();
  const slots = inputSlots(p);
  const empty = slots.filter(s => state.entries[s.slot] === '' || state.entries[s.slot] == null);
  if (empty.length) {
    state.focus = empty[0].slot;
    state.shake = empty[0].slot;
    state.bubble = bi(UI.empty.en, UI.empty.vi);
    render();
    return;
  }
  const bad = slots.filter(s => Number(state.entries[s.slot]) !== s.expect);
  if (!bad.length) { onCorrect(); return; }
  state.bad = {};
  bad.forEach(s => { state.bad[s.slot] = true; });
  state.shake = bad[0].slot;
  state.focus = bad[0].slot;
  state.bubble = bad[0].help;
  state.round.wrong++;
  if (progress.sound) beep(196, 0.15, 'triangle');
  if (progress.read) speak(t(bad[0].help), progress.lang);
  render();
}
function hintAct() {
  if (!state.round || state.round.locked) return;
  const p = cur();
  const slots = inputSlots(p);
  const badIds = state.bad || {};
  let target = slots.find(s => badIds[s.slot]) || slots.find(s => !state.entries[s.slot]);
  if (!target) target = slots[0];
  if (!state.talked) {
    state.talked = 1;
    state.focus = target.slot;
    state.bubble = target.help;
    if (progress.read) speak(t(target.help), progress.lang);
    render();
    return;
  }
  state.entries[target.slot] = String(target.expect);
  if (state.bad) delete state.bad[target.slot];
  state.round.hints++;
  state.focus = firstEmpty(p, state.entries) || target.slot;
  state.bubble = bi('One box filled. You do the next.', 'Đã điền một ô. Con làm ô tiếp.');
  render();
}
function pressKey(k) {
  if (!state.round || state.round.locked) return;
  if (state.demo && state.round.demoPhase !== 'try') return;
  const id = state.focus || firstEmpty(cur(), state.entries);
  if (!id) return;
  const slot = findSlot(cur(), id);
  if (!slot || slot.pre) return;
  state.focus = id;
  let v = state.entries[id] || '';
  if (k === 'bs') v = v.slice(0, -1);
  else if (v.length < slot.max) v += k;
  state.entries[id] = v;
  if (state.bad) delete state.bad[id];
  if (k !== 'bs' && v.length >= slot.max && slot.max === 1) {
    const next = firstEmpty(cur(), state.entries);
    if (next) state.focus = next;
  }
  render();
}

function onClick(e) {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  if (act === 'soro-max') {
    state.soroFull = !state.soroFull;
    render();
    const win = document.querySelector('.soro-win');
    if (state.soroFull && win && win.requestFullscreen) win.requestFullscreen().catch(function () {});
    if (!state.soroFull && document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    return;
  }
  if (act === 'wood-toggle') {
    state.woodOpen = !state.woodOpen;
    if (!state.woodOpen) state.woodBook = false;
    render();
    return;
  }
  if (act === 'wood-book') {
    state.woodOpen = true;
    state.woodBook = !state.woodBook;
    render();
    return;
  }
  if (act === 'wood-chap') {
    state.woodChap = Number(el.dataset.i) || 0;
    render();
    return;
  }
  if (act === 'wood-heaven' || act === 'wood-earth') return;
  if (act === 'soro-toggle') {
    state.sorobanOpen = !state.sorobanOpen;
    if (!state.sorobanOpen && document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (!state.sorobanOpen) state.soroFull = false;
    render();
    return;
  }
  if (act === 'soro-clear') {
    state.soroban = null;
    if (progress.sound) beep(180, 0.08, 'triangle');
    render();
    return;
  }
  if (act === 'soro-settings') { state.soroSet = !state.soroSet; state.soroHelp = false; render(); return; }
  if (act === 'soro-help') { state.soroHelp = !state.soroHelp; state.soroSet = false; render(); return; }
  if (act === 'soro-cols') {
    progress.soroCols = Number(el.dataset.n) || 5;
    state.soroban = null;
    save();
    render();
    return;
  }
  if (act === 'soro-color') {
    progress.soroColor = el.dataset.id === 'white' ? 'white' : 'black';
    save();
    render();
    return;
  }
  if (act === 'soro-heaven' || act === 'soro-earth') return;
  if (act === 'enter') { goFull(); state.screen = 'home'; render(); if (progress.sound) chime(); return; }
  if (act === 'full') {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    else goFull();
    return;
  }
  if (act === 'tap') {
    const i = Number(el.dataset.i);
    if (!state.filled) state.filled = {};
    state.filled[i] = !state.filled[i];
    if (progress.sound) beep(520 + i * 24, 0.08);
    render();
    return;
  }
  if (act === 'ten-play' || act === 'ten-hub') {
    state.method = 'bonds';
    state.screen = 'tenplay';
    state.ten = { world: 'hub', streak: (state.ten && state.ten.streak) || 0 };
    if (history.replaceState) history.replaceState(null, '', '#/ten');
    render();
    return;
  }
  if (act === 'ten-world') {
    state.method = 'bonds';
    state.screen = 'tenplay';
    state.ten = { world: el.dataset.w || 'sky', streak: (state.ten && state.ten.streak) || 0 };
    startTen(true);
    if (history.replaceState) history.replaceState(null, '', '#/ten/' + state.ten.world);
    render();
    sayTen('ask');
    return;
  }
  if (act === 'ten-hear') { sayTen(state.ten && state.ten.flash === 'yes' ? 'yes' : 'ask'); return; }
  if (act === 'ten-pick') { pickTen(Number(el.dataset.n)); return; }
  if (act === 'ten-dial') { dialTen(Number(el.dataset.dir)); return; }
  if (act === 'ten-side') {
    const g = state.ten;
    if (!g || g.flash === 'yes') return;
    const side = el.dataset.side === 'right' ? 'right' : 'left';
    g[side] = Math.max(0, Math.min(10, (g[side] || 0) + Number(el.dataset.dir)));
    g.flash = '';
    render();
    return;
  }
  if (act === 'ten-plant') { plantTen(); return; }
  if (act === 'ten-judge') { judgeTen(el.dataset.yes === '1'); return; }
  if (act === 'ten-pour') { pourTen(); return; }
  if (act === 'ten-plank') { plankTen(Number(el.dataset.n)); return; }
  if (act === 'home') { goHome(); return; }
  if (act === 'intro') { goIntro(); return; }
  if (act === 'back') {
    if (state.demo) { goIntro(); return; }
    if (state.screen === 'play') { state.leaveAsk = true; render(); return; }
    goHome();
    return;
  }
  if (act === 'stay') { state.leaveAsk = false; render(); return; }
  if (act === 'lang') { progress.lang = el.dataset.lang; save(); render(); return; }
  if (act === 'sound') { progress.sound = !progress.sound; save(); if (progress.sound) beep(660, 0.08); render(); return; }
  if (act === 'read') { progress.read = !progress.read; save(); render(); return; }
  if (act === 'sit') { progress.sit = !progress.sit; save(); render(); return; }
  if (act === 'bed') { state.method = el.dataset.method; state.screen = 'intro'; state.flash = null; render(); return; }
  if (act === 'parents') { state.screen = 'parents'; state.chapter = state.chapter || 'how'; progress.readCh.how = 1; save(); render(); return; }
  if (act === 'chapter') {
    state.chapter = el.dataset.id;
    state.quiz = null;
    progress.readCh[state.chapter] = 1;
    save();
    render();
    return;
  }
  if (act === 'locked') {
    state.flash = bi(UI.locked.en, UI.locked.vi);
    beep(180, 0.1, 'triangle');
    render();
    return;
  }
  if (act === 'start') {
    const method = el.dataset.method || state.method;
    const level = Number(el.dataset.level || 1);
    if (!unlocked(method, level) && method !== 'daily') return;
    startRound(method, level, { sit: el.dataset.sit === '1' });
    return;
  }
  if (act === 'daily') { startDaily(); return; }
  if (act === 'demo') { startDemo(el.dataset.method || state.method); return; }
  if (act === 'demo-try') {
    state.round.demoPhase = 'try';
    state.round.locked = false;
    state.recapOn = false;
    state.entries = blankEntries(cur());
    state.focus = firstEmpty(cur(), state.entries);
    state.bubble = bi('Your turn.', 'Tới lượt con.');
    render();
    if (progress.read) speak(t(state.bubble), progress.lang);
    return;
  }
  if (act === 'key') { pressKey(el.dataset.k); return; }
  if (act === 'check') { check(); return; }
  if (act === 'hint') { hintAct(); return; }
  if (act === 'next') { nextCard(); return; }
  if (act === 'speak') { speak(el.dataset.text, el.dataset.lang); return; }
  if (act === 'quiz-start') {
    state.quiz = { id: el.dataset.id, i: 0, picked: null, score: 0, locked: false };
    progress.readCh[el.dataset.id] = 1;
    save();
    render();
    return;
  }
  if (act === 'choice') {
    if (!state.quiz || state.quiz.locked) return;
    const q = QUIZ[state.quiz.id][state.quiz.i];
    state.quiz.picked = Number(el.dataset.i);
    state.quiz.locked = true;
    if (state.quiz.picked === q.answer) state.quiz.score++;
    render();
    return;
  }
  if (act === 'quiz-next') {
    if (!state.quiz) return;
    state.quiz.i++;
    state.quiz.picked = null;
    state.quiz.locked = false;
    if (state.quiz.i >= (QUIZ[state.quiz.id] || []).length) {
      progress.quiz[state.quiz.id] = Math.max(progress.quiz[state.quiz.id] || 0, state.quiz.score);
      save();
    }
    render();
    return;
  }
  if (act === 'unlock') { progress.unlockAll = true; save(); render(); return; }
  if (act === 'reset') { state.resetAsk = true; render(); return; }
  if (act === 'reset-yes') {
    progress = { name: '', lang: 'vi', sound: true, read: true, sit: false, stars: {}, fruit: 0, readCh: {}, quiz: {}, unlockAll: false, sawHow: false, daily: {} };
    save();
    state.resetAsk = false;
    state.chapter = 'how';
    render();
  }
}
function onInput(e) {
  if (e.target.id === 'player-name') {
    progress.name = cleanName(e.target.value);
    save();
    if (e.target.value !== progress.name) e.target.value = progress.name;
    return;
  }
  if (!e.target.dataset || !e.target.dataset.slot) return;
  if (!state.round || state.round.locked) return;
  const id = e.target.dataset.slot;
  const slot = findSlot(cur(), id);
  if (!slot || slot.pre) return;
  const v = String(e.target.value || '').replace(/\D/g, '').slice(0, slot.max);
  if (e.target.value !== v) e.target.value = v;
  state.entries[id] = v;
  state.focus = id;
  if (state.bad) delete state.bad[id];
  e.target.classList.remove('bad');
  if (usePhoneKeys()) {
    document.querySelectorAll('[data-echo="' + id + '"]').forEach(function (n) {
      n.textContent = v || '?';
      n.classList.toggle('filled', !!v);
    });
    const check = document.querySelector('.phone-check');
    const problem = cur();
    if (check && problem) check.classList.toggle('ready', inputSlots(problem).every(function (s) { return state.entries[s.slot]; }));
    if (v.length >= slot.max) {
      const next = firstEmpty(cur(), state.entries);
      if (next && next !== id) {
        state.focus = next;
        const n = document.querySelector('[data-slot="' + next + '"]');
        if (n && n.focus) n.focus();
      }
    }
    return;
  }
  render();
}
function onKeyDown(e) {
  if (e.target && e.target.id === 'player-name') return;
  if (state.screen !== 'play') return;
  if (e.key === 'Enter') { e.preventDefault(); check(); }
  else if (e.key === 'Backspace' && e.target && e.target.dataset && e.target.dataset.slot) {
    /* native input handles it */
  } else if (/^[0-9]$/.test(e.key) && !(e.target && e.target.dataset && e.target.dataset.slot)) {
    pressKey(e.key);
  }
}
function onFocus(e) {
  if (e.target && e.target.dataset && e.target.dataset.slot) {
    state.focus = e.target.dataset.slot;
    document.querySelectorAll('.slot.on').forEach(n => n.classList.remove('on'));
    e.target.classList.add('on');
  }
}

function routeFromHash() {
  if (typeof location === 'undefined') return false;
  const parts = (location.hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
  if (!parts.length) return false;
  const a = parts[0], b = parts[1], c = parts[2];
  if (a === 'home') { state.screen = 'home'; return 'paint'; }
  if (a === 'parents') {
    state.screen = 'parents';
    state.chapter = b && BOOK[b] ? b : 'how';
    progress.readCh[state.chapter] = 1;
    return 'paint';
  }
  if (a === 'intro' && b && meta(b)) {
    state.method = b;
    state.screen = 'intro';
    return 'paint';
  }
  if (a === 'play' && b && meta(b)) {
    startRound(b, Math.min(4, Math.max(1, Number(c || 1))));
    return 'done';
  }
  if (a === 'daily') { startDaily(); return 'done'; }
  if (a === 'ten') {
    state.method = 'bonds';
    state.screen = 'tenplay';
    if (b && ['lock', 'grow', 'judge', 'potion', 'bridge'].indexOf(b) >= 0) {
      state.ten = { world: b, streak: 0 };
      startTen(true);
    } else state.ten = { world: 'hub', streak: 0 };
    return 'paint';
  }
  return false;
}
function init() {
  load();
  if (!progress.name) { progress.name = 'Natalie'; save(); }
  document.addEventListener('click', onClick);
  document.addEventListener('input', onInput);
  document.addEventListener('keydown', onKeyDown);
  function onOrient() {
    if (state.screen === 'play') render();
  }
  if (window.matchMedia) {
    const orient = window.matchMedia('(orientation: portrait)');
    if (orient.addEventListener) orient.addEventListener('change', onOrient);
    else if (orient.addListener) orient.addListener(onOrient);
  }
  window.addEventListener('orientationchange', function () { setTimeout(onOrient, 160); });
  window.addEventListener('resize', function () { if (state.sorobanOpen) paintAllRods(); });
  document.addEventListener('fullscreenchange', function () { if (state.sorobanOpen) requestAnimationFrame(paintAllRods); });
  document.addEventListener('focusin', onFocus);
  document.addEventListener('pointerdown', e => {
    if (e.target.closest && e.target.closest('.pad')) e.preventDefault();
  });
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.onvoiceschanged = function () {};
  const routed = routeFromHash();
  if (routed === 'done') return;
  if (!routed) state.screen = 'curtain';
  render();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}

if (typeof process !== 'undefined' && process.argv && process.argv[1] && process.argv[1].indexOf('app.js') >= 0) {
  const errs = selfTest();
  if (errs.length) {
    console.error(errs.slice(0, 30).join('\n'));
    console.error('TOTAL ' + errs.length);
    process.exit(1);
  }
  console.log('selfTest ok');
}
