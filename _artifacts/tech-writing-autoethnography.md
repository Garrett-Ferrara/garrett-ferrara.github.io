---
title: "The Intersection of Tech & The Writing Process"
summary: "An autoethnographic exploration of the relationships between technology and writing practice in my own work."
role: "Student"
course: "ENC 5705 - Composition Theory and Pedagogy"
tags: ["Academic Writing", "Data Visualization"]
date: 2025-05-15
weight: 6
pdf: "/assets/TechWritingAutoethnography.pdf"
preview_image: "/assets/previews/TechWritingAutoethography.jpg"
---

## Overview

This project used screen recording and data coding to reflect on what my own home computer setup reveals about writing practice. I recorded the entire process of completing a shorter assignment for a separate class, then reviewed the footage to code when I spent time in three applications I nearly always use during the writing process: Microsoft Word, Adobe Acrobat, and Zotero. I also coded time spent writing new content, revising, or otherwise, such as researching for more information.

The main conclusion from this project was illustrating how writing is rarely a linear process, meaning that teaching a single writing process such as "Brainstorming, Outlining, Rough Draft, Revise and Edit" fails to capture the lived experience of producing a written text. In schools, this means teaching students how to optimize their writing process rather than imparting a strict process to follow. In the workplace, this means reconciling the need for structured, ascending review chains of documents with the realities of a nonlinear writing process.

To show this conclusion, I visualized the data into pie charts and timelines. In particular, the timelines on pages 5, 7, and 9 illustrate the nonlinear nature of the writing process the best.

## Reflections

This assignment captured the most important lessons I learned in Composition Theory and Pedagogy. By the time I had taken this course, I had already spent years as a Sergeant in the Army teaching junior analysts how to write, and I wish I knew then what I know now about teaching writing. Learning to write in the Army was nothing short of stressful and borderline traumatic: I can't really remember the specifics of any lesson that was taught to me through pushups, and I imagine any lessons I doled out in the same way are remembered just as poorly.

I had the opportunity to apply the principles in this coursework toward a new team as the Managing Editor of Alethea. Reflecting on the experience of getting new analysts up to speed, the difference between then and now is enormous. Instead of trying to browbeat analysts into a dictated writing process, I've found myself able to meet them where they are and collaboratively strengthen their ability to draft compelling analytical prose under tight deadlines. Though no longer with the company, I've had multiple analysts come back and thank me for what they learned working with me: the strongest affirmation of my own growth.

Looking back at the details of this assignment, what stood out most to me is remembering how I built the timelines used within. While today I'd be confident in being able to create something in Plotly or R through Claude Code, I had no idea how to get the graphics I wanted back then without a specific tool to do so for me. So I improvised. Using Visual Basic for Applications, I generated a Microsoft Office shape for each cell as a rectangle with a width corresponding to the time spent, then looped through every coded action in the dataset, appending them all together. I would never recommend anyone try to repeat this my way given how convoluted it was, but it worked, and I've included the code below for reference.

```vba
Sub TimelineMaker()
    Dim TLShape As Shape
    Dim TLLeft
    Dim TLTop
    Dim TLHeight
    Dim TLWidth
    Dim ShpName As String


    TLLeft = 0
    TLTop = 50
    TLHeight = 50
    TLWidth = 0

    For i = 3 To 188

        TLWidth = Sheets("Sheet1").Cells(i, 5).Value * 100000
        Set TLShape = Sheets("Create Shape").Shapes.AddShape(msoShapeRectangle, TLLeft, TLTop, TLWidth, TLHeight)
        ShpName = "Shape" & i
        TLShape.Name = ShpName
        'Creating CYM Chart based on active application
        'With TLShape
        '    TLShape.Line.Weight = 0
        '    TLShape.Line.Transparency = 1
        '    If Sheets("Sheet1").Cells(i, 7).Value = "OXOOOOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOXOOOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOXOOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOOXOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOOOOXOXOOOO" Then
        '        TLShape.Fill.ForeColor.RGB = RGB(0, 255, 255)
        '    ElseIf Sheets("Sheet1").Cells(i, 7).Value = "OOOOOXOOOXOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOOOOXOOXOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOOOXXOOXOOO" Then
        '        TLShape.Fill.ForeColor.RGB = RGB(255, 0, 255)
        '    ElseIf Sheets("Sheet1").Cells(i, 7).Value = "OXOOOOOOXOXOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOOOOXOOOXOO" Or Sheets("Sheet1").Cells(i, 7).Value = "XOOOOOOOOOXOO" Then
        '        TLShape.Fill.ForeColor.RGB = RGB(255, 255, 0)
        '    Else
        '        TLShape.Fill.ForeColor.RGB = RGB(255, 255, 255)
        '    End If
        'End With

        'Creating BW Chart based on Writing, Revising, Non-Writing.
        With TLShape
            TLShape.Line.Weight = 0
            TLShape.Line.Transparency = 1
            If Sheets("Sheet1").Cells(i, 7).Value = "OXOOOOOOXOOOO" Then
                TLShape.Fill.ForeColor.RGB = RGB(0, 0, 0)
            ElseIf Sheets("Sheet1").Cells(i, 7).Value = "OOXOOOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OOOXOOOOXOOOO" Or Sheets("Sheet1").Cells(i, 7).Value = "OXOOOOOOXOXOO" Then
                TLShape.Fill.ForeColor.RGB = RGB(128, 128, 128)
            Else
                TLShape.Fill.ForeColor.RGB = RGB(255, 255, 255)
            End If
        End With

        'TESTING, DISPLAYS ID
'        With TLShape.TextFrame
'            .Characters.Text = i
'        End With


        TLLeft = TLLeft + TLWidth

    Next i


End Sub
```
