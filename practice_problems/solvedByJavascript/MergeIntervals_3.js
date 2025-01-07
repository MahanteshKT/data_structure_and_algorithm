/*
Merge Intervals
Problem: Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Key Points About Overlap
When does overlap occur?

If the end of the first interval (b) is greater than or equal to the start of the second interval (
𝑐
c), and the start of the first interval (
𝑎
a) is less than or equal to the end of the second interval (
𝑑
d).
Mathematically:𝑏≥𝑐and𝑎≤𝑑
When does overlap not occur?
    When one interval ends before the other begins:
If 𝑏<𝑐 or 𝑎>𝑑.
*/

function mergeIntervals(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    var merged = [];
    for (let interval of intervals) {
        if (merged.length === 0 || merged[merged.length-1][1] < interval[0] ) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] =  Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }
    return merged;
}

console.log(mergeIntervals([[1,3],[8,10],[2,6],[15,18]]));