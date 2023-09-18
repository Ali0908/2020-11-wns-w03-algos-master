/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!
export default function getAllUniqueCategories({ events }: { events: EventWithCategory[] }): string[] {
    // Step 2: Create a Set to store unique categories
    const uniqueCategoriesSet = new Set<string>();

// Step 1: Iterate through the events and collect unique categories
events.forEach((event) => {
    event.categories.forEach((category) => {
    uniqueCategoriesSet.add(category);
    });
});

// Step 3: Sort the unique categories alphabetically
const sortedCategories = Array.from(uniqueCategoriesSet).sort();

// Step 4: Return the sorted categories
return sortedCategories;
}


// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}
