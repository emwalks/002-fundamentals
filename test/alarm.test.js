const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});

test('Lunch time', () => {
  let timeNow = new Date();
  timeNow.setHours(13);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('Announcing names', () => {

  let expectedNames = [ "James", "Susan", "Geoff", "Lisa"];

  expect(alarm.announceNames()).toEqual(expectedNames);
});

test('check who has had a lie in', () => {

  let peopleThatHaveHadALieIn = [
    { name: "James", 
      wakeUpTime: 8 },
    { name: "Susan", 
      wakeUpTime: 14 },
    { name: "Geoff", 
      wakeUpTime: 15 },
    { name: "Lisa", 
      wakeUpTime: 7 }
];

  expect(alarm.oneHourLieIn()).toEqual(peopleThatHaveHadALieIn);
});

test('who are the early risers?', () => {

  let expectedNamesEarly = [
    { name: "James", 
      wakeUpTime: 7 },
    { name: "Lisa", 
      wakeUpTime: 6 }
];

  expect(alarm.earlyRisers()).toEqual(expectedNamesEarly);
});