class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        start_row = 0
        end_row = len(matrix)-1
        mid_row = (start_row+end_row)//2
        while (start_row < end_row):
            mid_row = (start_row+end_row)//2
            elm_row = matrix[mid_row][0]
            if target > elm_row:
                start_row = mid_row+1
            elif target < elm_row:
                end_row = mid_row-1
            else:
                return True
        start_col = 0
        end_col = len(matrix[mid_row])-1
        mid_col = (start_col+end_col)//2
        while (start_col < end_col):
            mid_col = (start_col+end_col)//2
            elm_col=matrix[mid_row][mid_col]
            if target>elm_col:
                start_col=mid_col+1
            elif target<elm_col:
                end_col=mid_col-1
            else:
                return True
        return matrix[mid_row][mid_col]==target
