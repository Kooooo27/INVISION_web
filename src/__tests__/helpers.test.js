import { describe, it, expect } from 'vitest';
import { getUserTitle } from '../utils/helpers';

describe('getUserTitle', () => {
    const mockProfile = {
        name: 'テストユーザー',
        riskTolerance: 'moderate',
    };

    it('returns a string title', () => {
        const result = getUserTitle(mockProfile, {});
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });

    it('handles null/undefined input gracefully', () => {
        expect(() => getUserTitle(null, {})).not.toThrow();
        expect(() => getUserTitle(undefined, undefined)).not.toThrow();
    });
});
