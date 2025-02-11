import math

class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = int(pageSize)
        self.totalPages = math.ceil(len(items)/pageSize)
        self.currentPage = 1

    def getVisibleItems(self):
        firstIndex = (self.currentPage - 1) * self.pageSize
        if self.currentPage == self.totalPages:
            page_items = self.items[firstIndex:]
            print(page_items)
        else:
            lastIndex = firstIndex + self.pageSize 
            page_items = self.items[firstIndex: lastIndex]
            print(page_items)

    def firstPage(self):
        self.currentPage = 1
        return self

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
            return self
        return self
    
    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
            return self
        return self
    
    def lastPage(self):
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        if int(pageNum) > self.totalPages:
            self.currentPage = self.totalPages
        elif int(pageNum) <= 0:
            self.currentPage = 1
        else:
            self.currentPage = int(pageNum)
        return self

# >>>>>>> TESTING THE CODE

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
p.getVisibleItems() 
p.nextPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.firstPage()
p.nextPage().nextPage()
p.getVisibleItems()
