import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import "jspdf-autotable";

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.scss'],
})
export class DownloadPdfComponent implements OnInit {
  constructor(private datePipe: DatePipe) {}
  ngOnInit() {}

  getData(
    sl: number,
    fname: string,
    lname: string,
    age: number,
    gender: string,
    mobile: string
  ) {
    return [sl, fname, lname, age, gender, mobile];
  }
  public print() {
    const doc = new jsPDF.jsPDF();
    const columns = [
      ['SL No', 'First Name', 'Last name', 'Age', 'Gender', 'Mobile Number'],
    ];

    // const data = [
    //   ['Data 1', 'Data 2', 'Data 3'],

    // ];

    let data: any[] = [];
    for (let index = 0; index < 50; index++) {
      data[index] = this.getData(
        index + 1,
        'Md. Rafiqul',
        'Islam',
        26,
        'Male',
        '01991166550'
      );
    }
    // autoTable(doc, {
    //   head: columns,
    //   body: data,
    //   didDrawPage: (dataArg) => {
    //     doc.setFontSize(20);
    //     doc.setTextColor(40);
    //     // doc.setFontStyle('normal');
    //     doc.text('PAGE', dataArg.settings.margin.left, 10);
    //   },
    // });

    doc.save('table.pdf');
  }

  // Another Example
  generateTable() {
    var dateTime = this.datePipe.transform(new Date(), 'd MMM, y HH:mm:ss');
    dateTime = `Printing Date: ${dateTime}`;

    var doc = new jsPDF.jsPDF('p', 'pt', 'a4');
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, (y = y + 30), 'Product detailed report');
    var columns = ['ID', 'Name', 'Address', 'Age'];
    var rows = [
      [1, 'John', 'Vilnius', 22],
      [2, 'Jack', 'Riga', 25],
    ];

    // this.addWaterMark(doc, 2);
    // doc.autoTable({
    //   html: '#product-table',
    //   startY: 70,
    //   theme: 'striped',
    //   showHead: 'everyPage',
    //   columnStyles: {
    //     0: {
    //       halign: 'left',
    //       tableWidth: 100,
    //     },
    //     1: {
    //       tableWidth: 100,
    //     },
    //     2: {
    //       halign: 'left',
    //       tableWidth: 100,
    //     },
    //     3: {
    //       halign: 'left',
    //       tableWidth: 100,
    //     },
    //   },

    //   didDrawPage: function (data: any) {
    //     // Header
    //     doc.setFontSize(20);
    //     doc.setTextColor(40);
    //     doc.text('Report', data.settings.margin.left, 22);

    //     // Footer
    //     var str = 'Page ' + doc.internal.getNumberOfPages();

    //     doc.setFontSize(10);

    //     // jsPDF 1.4+ uses getWidth, <1.4 uses .width
    //     var pageSize = doc.internal.pageSize;
    //     var pageHeight = pageSize.height
    //       ? pageSize.height
    //       : pageSize.getHeight();
    //     doc.text(str, data.settings.margin.left, pageHeight - 10);
    //   },
    // });
    doc.autoTable(columns, rows, {
      html: '#product-table',

      startY: doc.pageCount > 1 ? doc.autoTableEndPosY() + 50 : 120,
      styles: {
        fontSize: 7,
        // lineWidth: 1,
        // lineColor: [0, 0, 0],
      },
      tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      theme: 'grid',
      headStyles: {
        fillColor: [153, 204, 255],
        fontSize: 10,
        textColor: [0, 0, 0],
      },
      createdCell: function (cell: any, data: any) {
        console.log(cell);
        if (cell.row.cells[3].raw === 'Age') {
          // cell.row.cells[3].styles.fontSize = 15;
          // cell.row.cells[3].styles.textColor = 111;
          cell.row.cells[3].styles.halign = 'right';
        } else {
          //else rule for drawHeaderCell hook
          // cell.styles.textColor = 255;
          // cell.styles.fontSize = 10;
        }
      },

      // showHead: 'everyPage',
      showFoot: 'everyPage',
      rowPageBreak: 'auto',
      margin: { top: 10, right: 20, bottom: 100, left: 20 },
      columnStyles: {
        0: {
          halign: 'left',
          tableWidth: 100,
        },
        1: {
          tableWidth: 100,
        },
        2: {
          halign: 'left',
          tableWidth: 100,
        },
        3: {
          halign: 'right',
          tableWidth: 100,
        },
      },

      didDrawPage: function (data: any) {
        //Setting margin top and bottom
        data.settings.margin.top = 90;
        data.settings.margin.bottom = 90;
        doc.setFontSize(20);
        doc.setTextColor(0, 0, 0);

        // Set header
        var img = new Image();
        img.src = '../../../../assets/Header.jpg';
        doc.addImage(img, 'JPG', 0, 0, 612, 82, '', 'FAST');

        // Footer
        doc.setFontSize(5);

        // Set footer image
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();

        var img = new Image();
        img.src = '../../../../assets/Footer.jpg';
        doc.addImage(img, 'JPG', 0, pageHeight - 95, 612, 82, '', 'FAST');

        // Set Printing date and time
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(6);
        doc.text(dateTime, 30, pageHeight - 2, {
          baseline: 'bottom',
        });

        // Set user information
        doc.setFontSize(6);
        doc.setTextColor(0, 0, 0);
        var userData = `Printed by Rafiqul Islam`;
        doc.text(userData, 260, pageHeight - 2, {
          baseline: 'bottom',
        });
      },
    });

    // Set page number
    var pageNumber = doc.internal.getNumberOfPages();
    for (let j = 1; j < pageNumber + 1; j++) {
      doc.setPage(j);
      var pageSize = doc.internal.pageSize;
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

      const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      var str = `Page ${j} of ${pageNumber}`;
      const textWidth = doc.getTextWidth(str);
      doc.text(str, pageWidth - textWidth - 20, pageHeight - 2, {
        baseline: 'bottom',
      });
    }

    this.addWaterMark(doc, pageNumber);

    doc.output('dataurlnewwindow', { filename: 'product' });
    return doc;
    // doc.save('auto_table_pdf');
  }

  addWaterMark(doc: any, pageNumber: any) {
    for (let i = 0; i < pageNumber; i++) {
      doc.setPage(i);
      // doc.saveGraphicsState();
      // doc.setFontSize(100);
      // doc.setTextColor(150);
      // doc.setGState(new doc.GState({ opacity: 0.2 }));
      // doc.text('BD', 300, doc.internal.pageSize.height - 400, {
      //   align: 'center',
      //   baseline: 'middle',
      // });
      var img = new Image();
      img.src = '../../../../assets/Background Watermark.jpg';
      doc.addImage(
        img,
        'JPG',
        20,
        doc.internal.pageSize.height - 420,
        612,
        82,
        '',
        'FAST'
      );
      // doc.restoreGraphicsState();
    }

    return doc;
  }
  addFooters(doc: any) {
    const pageCount = doc.internal.getNumberOfPages();

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(
        'Page ' + String(i) + ' of ' + String(pageCount),
        doc.internal.pageSize.width / 2,
        287,
        {
          align: 'center',
        }
      );
    }
  }

  // Another example
}
