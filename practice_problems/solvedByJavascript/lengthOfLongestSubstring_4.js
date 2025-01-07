/*
Longest Substring Without Repeating Characters
Problem: Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
(Substring: "abc")
*/
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLength = 0, left = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring('abcabcdf'))