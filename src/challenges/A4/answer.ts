/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ... 
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 * 
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!
// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
//     const grouped: { [key: string]: Message[] } = {};

//     messages.forEach(message => {
//         const date = new Date(message.sentAt);
//         date.setUTCHours(0, 0, 0, 0);
//         const day = date.toISOString().split('T')[0] + 'T00:00:00.000Z';

//         if (!grouped[day]) {
//             grouped[day] = [];
//         }

//         grouped[day].push(message);
//     });

//     const result: DayMessages[] = Object.keys(grouped).map(day => ({
//         day,
//         messages: grouped[day]
//     }));

//     result.sort((a, b) => a.day.localeCompare(b.day));

//     return result;
// }

// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface DayMessages {
    day: string;
    messages: Message[];
}