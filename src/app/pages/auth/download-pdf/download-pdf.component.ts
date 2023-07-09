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
    const doc = new jsPDF();
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
    const div = document.getElementById('product-table-header');
    var doc = new jsPDF.jsPDF('p', 'pt', 'letter');
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, (y = y + 30), 'Product detailed report');

    doc.autoTable({
      html: '#product-table',
      startY: 70,
      theme: 'striped',
      showHead: 'everyPage',
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
          halign: 'left',
          tableWidth: 100,
        },
      },

      didDrawPage: function (data: any) {
        // Header
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.text('Report', data.settings.margin.left, 22);

        // Footer
        var str = 'Page ' + doc.internal.getNumberOfPages();

        doc.setFontSize(10);

        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
    });

    doc.save('auto_table_pdf');
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
