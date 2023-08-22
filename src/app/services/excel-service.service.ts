import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

// import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
// import { saveAs } from 'file-saver';

@Injectable()
export class ExportService {
  exportToExcel(
    data: any[],
    title: string,
    header: any,
    header2: any,
    fileName: string
  ) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Car Data', {
      pageSetup: { paperSize: 9, orientation: 'landscape' },
    });

    // Add new row
    let titleRow = worksheet.addRow([title]);
    worksheet.mergeCells('A1', 'F1');
    // Set font, size and style in title row.
    titleRow.font = {
      name: 'Comic Sans MS',
      family: 4,
      size: 16,
      underline: 'double',
      bold: true,
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    // Blank Row
    worksheet.addRow([]);
    // worksheet.addTable({
    //   name: 'Demo Table 1',
    //   ref: 'C4',
    //   headerRow: true,
    //   totalsRow: true,
    //   style: {
    //     theme: 'TableStyleDark3',
    //     showRowStripes: true,
    //   },
    //   columns: [
    //     { name: 'Year', filterButton: true },
    //     { name: 'Month', filterButton: false },
    //     { name: 'Make', filterButton: false },
    //     { name: 'Model', filterButton: false },
    //     { name: 'Quantity', filterButton: false },
    //     { name: 'Pct', filterButton: false },
    //   ],
    //   rows: data,
    // });

    //Add row with current date
    // let subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')]);
    // let logo = workbook.addImage({
    //   base64: logoFile.logoBase64,
    //   extension: 'png',
    // });
    // worksheet.addImage(logo, 'E1:F3');

    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Add Data and Conditional Formatting
    data.forEach((d) => {
      let row = worksheet.addRow(d);
      let qty: any = row.getCell(5);

      console.log(row.getCell(5).value); //5
      console.log(row.getCell(6).value); //8

      let color = 'FF99FF99';
      if (+qty?.value < 500) {
        color = 'FF9999';
      }
      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color },
      };
      // row.border = {
      //   top: { style: 'thin' },
      //   left: { style: 'thin' },
      //   bottom: { style: 'thin' },
      //   right: { style: 'thin' },
      // };
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: 'FFFFFFFF',
        },
      };
      row.font = {
        color: {
          argb: '00000000',
        },
        bold: false,
      };
      row.eachCell((cell, number) => {
        cell.border = {
          top: {
            style: 'thin',
          },
          left: {
            style: 'thin',
          },
          bottom: {
            style: 'thin',
          },
          right: {
            style: 'thin',
          },
        };
      });
    });

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 20;
    // add a table to a sheet
    // worksheet.addTable({
    //   name: 'Demo Table 2',
    //   ref: 'H4',
    //   headerRow: true,
    //   totalsRow: true,
    //   style: {
    //     theme: 'TableStyleDark1',
    //     showRowStripes: true,
    //   },
    //   columns: [
    //     { name: 'Year', totalsRowLabel: 'Totals:', filterButton: true },
    //     { name: 'Month', totalsRowFunction: 'sum', filterButton: false },
    //     { name: 'Make', totalsRowFunction: 'sum', filterButton: false },
    //     { name: 'Model', totalsRowFunction: 'sum', filterButton: false },
    //     { name: 'Quantity', totalsRowFunction: 'sum', filterButton: false },
    //     { name: 'Pct', totalsRowFunction: 'sum', filterButton: false },
    //   ],
    //   rows: data,
    // });
    // Add Another Table
    let titleRow1 = worksheet.addRow(['Demo  Report 2']);
    worksheet.mergeCells('A74', 'F74');
    // Set font, size and style in title row.
    titleRow1.font = {
      name: 'Comic Sans MS',
      family: 4,
      size: 16,
      underline: 'double',
      bold: true,
    };
    titleRow1.alignment = { vertical: 'middle', horizontal: 'center' };
    // Blank Row

    worksheet.addRow([]);
    //Add Header Row
    headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Add Data and Conditional Formatting
    data.forEach((d) => {
      let row = worksheet.addRow(d);
      let qty: any = row.getCell(5);

      console.log(row.getCell(5).value); //5
      console.log(row.getCell(6).value); //8

      let color = 'FF99FF99';
      if (+qty?.value < 500) {
        color = 'FF9999';
      }
      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color },
      };
      // row.border = {
      //   top: { style: 'thin' },
      //   left: { style: 'thin' },
      //   bottom: { style: 'thin' },
      //   right: { style: 'thin' },
      // };
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: 'FFFFFFFF',
        },
      };
      row.font = {
        color: {
          argb: '00000000',
        },
        bold: false,
      };
      row.eachCell((cell, number) => {
        cell.border = {
          top: {
            style: 'thin',
          },
          left: {
            style: 'thin',
          },
          bottom: {
            style: 'thin',
          },
          right: {
            style: 'thin',
          },
        };
      });
    });

    // worksheet.fillFormula('E4:A10', 'E4+1', [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'CarData.xlsx');
    });
  }

  exportToExcelFile(
    data: any[],
    title: string,
    header: any,
    header2: any,
    fileName: string
  ) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Car Data', {
      pageSetup: { paperSize: 9, orientation: 'landscape' },
    });

    // Add new row
    let titleRow = worksheet.addRow([title]);
    worksheet.mergeCells('A1', 'F1');
    // Set font, size and style in title row.
    titleRow.font = {
      name: 'Comic Sans MS',
      family: 4,
      size: 16,
      underline: 'double',
      bold: true,
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    // Blank Row
    worksheet.addRow([]);

    worksheet.addTable({
      name: 'Demo Table 1',
      ref: 'B2',
      headerRow: true,
      totalsRow: true,

      style: {
        theme: 'TableStyleLight16',
        // showRowStripes: true,
      },
      columns: [
        { name: 'Year', filterButton: true, totalsRowLabel: 'Total' },
        { name: 'Month', filterButton: true },
        { name: 'Make', filterButton: true },
        { name: 'Model', filterButton: true },
        { name: 'Quantity', filterButton: true },
        { name: 'Pct', filterButton: true },
      ],
      rows: data,
    });
    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 20;

    // Add 2nd table in the same sheet
    worksheet.addTable({
      name: 'Demo2',
      ref: 'I2',
      headerRow: true,
      totalsRow: true,

      style: {
        theme: 'TableStyleLight16',
        showRowStripes: true,
      },
      columns: [
        { name: 'Year', filterButton: true, totalsRowLabel: 'Total' },
        { name: 'Month', filterButton: true },
        { name: 'Make', filterButton: true },
        { name: 'Model', filterButton: true },
        { name: 'Quantity', totalsRowFunction: 'sum', filterButton: true },
        { name: 'Pct', totalsRowFunction: 'sum', filterButton: true },
      ],
      rows: data,
    });

    worksheet.getColumn(7).width = 10;
    worksheet.getColumn(8).width = 20;
    worksheet.getColumn(9).width = 20;
    worksheet.getColumn(10).width = 20;
    worksheet.getColumn(11).width = 20;
    worksheet.getColumn(12).width = 20;

    const table = worksheet.getTable('Demo2');
    console.log(table);

    // return;
    // worksheet.fillFormula('E4:A10', 'E4+1', [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'CarData.xlsx');
    });
  }
}
