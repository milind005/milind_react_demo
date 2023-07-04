import React, { useMemo, useState } from 'react'

const UmPrime = () => {
    // We hold the user's selected number in state.
    const [selectedNum, setSelectedNum] = React.useState(100);

    // We calculate all of the prime numbers between 0 and the
    // user's chosen number, `selectedNum`:
    const allPrimes = useMemo(() => {
        const result = [];
        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) {
                result.push(counter);
            }
        }
        return result

    }, [selectedNum]);

    return (
        <>
            <form>
                <label htmlFor="num">Your number:</label>
                <input
                    type="number"
                    value={selectedNum}
                    min={1}
                    max={100000}
                    onChange={(event) => {
                        // To prevent computers from exploding,
                        // we'll max out at 100k
                        let num = Math.min(100_000, Number(event.target.value));

                        setSelectedNum(event.target.value);
                    }}
                />
            </form>
            <p>
                There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
                <span className="prime-list">{allPrimes.join(', ')}</span>
                <br />
                <span className="prime-list">{allPrimes.join(', ')}</span>
            </p>
        </>
    );
}

// Helper function that calculates whether a given
// number is prime or not.
function isPrime(n) {
    const max = Math.ceil(n / 2);

    if (n === 2) {
        return true;
    }

    for (let counter = 2; counter <= max; counter++) {
        if (n % counter === 0) {
            return false;
        }
    }

    return true;
}

export default UmPrime