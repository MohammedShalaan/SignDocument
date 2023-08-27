import fitz
import sys

print('hello')
pdfpath = sys.argv[1]
fileHandle = fitz.open(pdfpath) #pdfPath sent from js server.

#fileHandle = fitz.open('testSign.pdf')
firstPage = fileHandle[0]

#find the **** position.

signatureIndex = 0
positionTuble = firstPage.get_text_words()
for i in range(len(positionTuble)):
    if(positionTuble[i][4] == '****'):
        signatureIndex = i


# the 10s mean strech the top left corner up and strech the bottom down corner down.
imgPositionRec = fitz.Rect(positionTuble[signatureIndex][0]-10,positionTuble[signatureIndex][1]-10,positionTuble[signatureIndex][2]+10,
                           positionTuble[signatureIndex][3]+10)


firstPage.insert_image(imgPositionRec,filename='download.png')

fileHandle.save('testOut.pdf')