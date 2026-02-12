/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  /*if (Number.isNaN(age)) {
    return -1;
  } else if (age < 0) {
    return -1;
  } else if (isWeekend == true && age <= 12) {
    return 8 + 3;
  } else if (isWeekend == false && age <= 12) {
    return 8;
  } else if (isWeekend == true && age >= 13 && age <= 17) {
    return 12 + 3;
  } else if (isWeekend == false && age >= 13 && age <= 17) {
    return 12;
  } else if (isWeekend == true && age >= 18 && age <= 59) {
    return 15 + 3;
  } else if (isWeekend == false && age >= 18 && age <= 59) {
    return 15;
  } else if (isWeekend == true && age >= 60) {
    return 10 + 3;
  } else if (isWeekend == false && age >= 60) {
    return 10;
  }*/
  //-->first code
  if (typeof age != "number" || Number.isNaN(age) || age < 0) {
    return -1;
  }
  if (typeof isWeekend != "boolean") {
    return -1;
  }
  let price;
  if (age <= 12) {
    price = 8;
  } else if (age <= 17) {
    price = 12;
  } else if (age <= 59) {
    price = 15;
  } else {
    price = 10;
  }
  if (isWeekend) {
    price = price + 3;
  }
  return price;
}
//-->Second code more optimized
