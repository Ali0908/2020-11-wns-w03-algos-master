/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information
*/

// ↓ uncomment bellow lines and add your response!
export default function sortAndMarkUnread({
    lastActivityDatetime,
    messages,
}: {
lastActivityDatetime: string;
messages: Message[];
}): MessageWithUnread[] {
// Sort the messages by their 'sentAt' property in ascending order (oldest first)
messages.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());

// Create an array to store the sorted messages with the 'unread' property
const messagesWithUnread: MessageWithUnread[] = [];

// Convert 'lastActivityDatetime' to a Date object for comparison
const lastActivityDate = new Date(lastActivityDatetime);

// Iterate through each message and determine if it's unread
for (const message of messages) {
    const sentAtDate = new Date(message.sentAt);
    const unread = sentAtDate > lastActivityDate;
    // Add the 'unread' property to the message
    messagesWithUnread.push({ ...message, unread });
}

return messagesWithUnread;
}


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}