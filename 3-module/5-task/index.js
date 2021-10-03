function getMinMax(string) {
    let returnValue = string
        .split(" ")
        .filter((i) => isFinite(i))
        .map((i) => +i);

    return {
        min: Math.min(...returnValue),
        max: Math.max(...returnValue)
    }
}