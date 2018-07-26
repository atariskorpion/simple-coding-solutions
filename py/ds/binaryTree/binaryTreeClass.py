class BinaryTree:
    def __init__(self, rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None
    
    def insertLeft(self, newNodeObj):
        if (self.leftChild == None):
            self.leftChild = newNodeObj
        else:
            t = BinaryTree(newNodeObj)
            t.insertLeft(self.leftChild)
            self.leftChild = t
    
    def insertRight(self, newNodeObj):
        if (self.rightChild == None):
            self.rightChild = newNodeObj
        else:
            t = BinaryTree(newNodeObj)
            t.insertRight(self.rightChild)
            self.rightChild = t
    
    def getRightChild(self):
        return self.rightChild

    def getLeftChild(self):
        return self.leftChild

    def setRootVal(self,obj):
        self.key = obj

    def getRootVal(self):
        return self.key
