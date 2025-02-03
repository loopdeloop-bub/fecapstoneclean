import {initializeTimes} from '../utils/utils';
import {expect, jest, test} from '@jest/globals';
import * as api from '../theSoCalledAPI';

afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
});

test("API Initialize Times test", () => {
    const timings = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const mockFetch = jest.fn( () => {
        return timings;
    });

    jest.spyOn(api,'fetchAPI').mockImplementation(mockFetch);
    const retVal = initializeTimes();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(retVal.length).toEqual(6);
    expect(retVal.map( item => item.time)).toStrictEqual(timings);
});
