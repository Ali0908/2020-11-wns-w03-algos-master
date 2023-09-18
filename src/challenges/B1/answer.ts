/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!
export default function sortEventsByStartDatetime({ events }: { events: EventDatetime[] }): EventDatetime[] {
    function compareEvents(event1: EventDatetime, event2: EventDatetime): number {
    const startDatetime1 = new Date(event1.startDatetime);
    const startDatetime2 = new Date(event2.startDatetime);

      // Compare by startDatetime
    if (startDatetime1 < startDatetime2) {
        return -1;
    } else if (startDatetime1 > startDatetime2) {
        return 1;
    } else {
        // If startDatetime is the same, compare by event duration
        const duration1 = new Date(event1.endDatetime).getTime() - startDatetime1.getTime();
        const duration2 = new Date(event2.endDatetime).getTime() - startDatetime2.getTime();

        return duration1 - duration2;
    }
    }

    return events.sort(compareEvents);
}

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}