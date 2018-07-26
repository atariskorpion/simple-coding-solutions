def BinaryTree(root):
    return [root, [], []]

def inserLeft(root, node):
    rootLeftNode = root.pop(1)
    if (len(rootLeftNode) > 1):
        root.insert(1, [node, rootLeftNode, []])
    else:
        root.insert(1, [node, [], []])
    
    return root

def insertRight(root, node):
    rootRightNode = root.pop(2)
    if(len(rootRightNode) > 0):
        root.insert(2, [node, [], rootRightNode])
    else:
        root.insert(2, [node, [], []])
    
    return root

def getRootVal(root):
    return root[0]

def setRootVal(root, val):
    root[0] = val

def getLeftChild(root):
    return root[1]

def getRightChild(root):
    return root[2]
