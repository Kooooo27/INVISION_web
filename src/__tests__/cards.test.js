import { describe, it, expect } from 'vitest';
import { briefingCards } from '../data/cards';

describe('Card Data Integrity', () => {
    it('briefingCards is a non-empty array', () => {
        expect(Array.isArray(briefingCards)).toBe(true);
        expect(briefingCards.length).toBeGreaterThan(0);
    });

    it('every card has required fields', () => {
        briefingCards.forEach((card, index) => {
            expect(card, `Card at index ${index} is missing 'title'`).toHaveProperty('title');
            expect(card, `Card at index ${index} is missing 'content'`).toHaveProperty('content');
        });
    });

    it('card titles are non-empty strings', () => {
        briefingCards.forEach((card, index) => {
            expect(typeof card.title, `Card at index ${index} title is not a string`).toBe('string');
            expect(card.title.trim().length, `Card at index ${index} has empty title`).toBeGreaterThan(0);
        });
    });

    it('has minimal duplicate card titles', () => {
        const titles = briefingCards.map(c => c.title);
        const uniqueTitles = new Set(titles);
        const duplicateCount = titles.length - uniqueTitles.size;
        // Allow up to 5 duplicates (some topics may appear across categories)
        expect(duplicateCount).toBeLessThanOrEqual(5);
    });
});
