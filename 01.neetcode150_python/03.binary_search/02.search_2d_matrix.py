class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        start_row = 0
        end_row = len(matrix) - 1
        while start_row < end_row:
            mid_row = (start_row + end_row) // 2
            elm_row1 = matrix[mid_row][0]
            elm_row2 = matrix[mid_row][-1]
            if target > elm_row2:
                print(target, elm_row2)
                start_row = mid_row + 1
            elif target < elm_row1:
                print(target, elm_row1)
                end_row = mid_row - 1
            elif target == elm_row1 or target == elm_row2:
                return True
            else:
                print(mid_row)
                break
        if end_row < start_row:
            return False
        mid_row = (start_row + end_row) // 2
        start_col = 0
        end_col = len(matrix[0]) - 1
        while start_col < end_col:
            mid_col = (start_col + end_col) // 2
            elm_col = matrix[mid_row][mid_col]
            if target > elm_col:
                start_col = mid_col + 1
            elif target < elm_col:
                end_col = mid_col - 1
            else:
                return True
        return False


print(Solution.searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
