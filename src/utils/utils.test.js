import { cutDescription, dateFormatter } from "./utils";

test("dateFormatter Wed Aug 04 2021", () => {
  expect(dateFormatter('Wed Aug 04 2021')).toBe('04/08/2021, 00:00');
});

test('cutDescription length 50 to 5',()=>{
    expect(cutDescription('some some some some some some some some some some ',5)).toBe('some ');
})
