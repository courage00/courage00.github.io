﻿ $(function () {
      // (function (window, $) {
      $("#Submit").click(function () {
        $("#show").html("");
        $('#anchor').html("");
        let CheckBoxList = [];//存部分同意
        for (let i = 1; i <= 9; i++) {  //存多選
          if ($("#c" + i).prop('checked') == true) {
            switch (i) {
              case 1:
                CheckBoxList.push(1700530628);
                break;
              case 2:
                CheckBoxList.push(1815303605);
                break;
              case 3:
                CheckBoxList.push(1506220121);
                break;
              case 4:
                CheckBoxList.push(1261815181);
                break;
              case 5:
                CheckBoxList.push(1345673982);
                break;
              case 6:
                CheckBoxList.push(643981330);
                break;
              case 7:
                CheckBoxList.push(751405492);
                break;
              case 8:
                CheckBoxList.push(1187932245);
                break;
              case 9:
                CheckBoxList.push(958354181);
                break;
            }
          }
        }
        // console.log(CheckBoxList.length);
        if (CheckBoxList.length != 0) {
          $("#ErrorBlock").html("")
        }
        else {
          $("#ErrorBlock").append("未選擇")
          return false;
        }


        let sheetID = "1QhRpcYEix-oyShiGgP4JwV4nBK-VXT92lk_jP9CtUTg"; // 試算表代號
        let sql = "select+A%2CB%2CC%2CD%2CE%2CF%2CG%2CH%2CI%2CJ%2CK%2CL%2CM%2CN%2CO%2CP%2CQ%2CR%2CS%2CT%2CV%2CW+where"; // SQL 語法
        let rent = $.trim($("#rent").val());
        let codename = $.trim($("#codename").val());
        //let address = $.trim($("#address").val());
        let callback = "callback"; // 回呼函數名稱
        let blockcount = 1;//區塊命名

        for (let x = 0; x < CheckBoxList.length; x++) {
          loading();
          let gid = CheckBoxList[x]; // 工作表代號
          let anchorhr = new Array(9);
          anchorhr[x] = gid;
          let Dataurl = "https://spreadsheets.google.com/tq?tqx=responseHandler:" + callback + "&tq=" + sql;
          if (codename != "") {
            Dataurl += "+%28B+Like+%27%25" + escape(codename) + "%25%27+or+" + "+I+Like+%27%25" + escape(codename) + "%25%27%29+and+";
          }
          if (rent != "") {
            Dataurl += "+J%3C%3D" + rent + "+order+by+J+";
          }
          else {
            Dataurl += "+1%3D1+";
          }
          Dataurl += "&key=" + sheetID + "&gid=" + gid;
          // console.log(Dataurl);
          // console.log(gid);
          $.getScript(Dataurl);
          // $("#show").append("<hr id=\"anchor" + gid + "\">");
          window[callback] = function (json) {
            let rowArray = json.table.rows;
            let rowLength = rowArray.length;
            let html = "";
            let i;
            let j;
            let dataGroup;
            let dataLength;
            for (i = 0; i < rowLength; i++) {
              dataGroup = rowArray[i].c;
              dataLength = dataGroup.length;
              html += "<tr>";
              for (j = 0; j < dataLength; j++) {
                if (!dataGroup[j]) {
                  continue;
                }
                switch (j) {
                  case 0:
                    html += "<td data-th=\"物件狀態\">" + (null || dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 1:
                    html += "<td data-th=\"編號\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 2:
                    html += "<td data-th=\"收件日期\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 3:
                    html += "<td data-th=\"服務費\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 4:
                    html += "<td data-th=\"對話要點\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 5:
                    html += "<td data-th=\"姓名\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 6:
                    html += "<td data-th=\"電話\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 7:
                    html += "<td data-th=\"區域\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 8:
                    html += "<td data-th=\"地址\"><a href =\"http://maps.google.com.tw/maps?q=" + (dataGroup[j].f || dataGroup[j].v || "") + "\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</a></td>";
                    break;
                  case 9:
                    html += "<td data-th=\"租金\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 10:
                    html += "<td data-th=\"含\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 11:
                    html += "<td data-th=\"格局\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 12:
                    html += "<td data-th=\"坪數\">" + (dataGroup[j].f || dataGroup[j].v || "") + "</td>";
                    break;
                  case 13:
                    html += "<td data-th=\"型態\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 14:
                    html += "<td data-th=\"現況\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 15:
                    html += "<td data-th=\"電\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 16:
                    html += "<td data-th=\"管理費\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 17:
                    html += "<td data-th=\"開伙\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 18:
                    html += "<td data-th=\"寵物\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 19:
                    html += "<td data-th=\"案名\">" + (dataGroup[j].f || dataGroup[j].v) + "</td>";
                    break;
                  case 20:
                    html += "<td data-th=\"原網址\"><a href=\"" + (dataGroup[j].f || dataGroup[j].v || "") + "\">連結</a></td>";
                    break;
                  case 21:
                    html += "<td data-th=\"樂屋網\"><a href=\"" + (dataGroup[j].f || dataGroup[j].v || "") + "\">連結</a></td>";
                    break;
                }
                html += (dataGroup[j].f || dataGroup[j].v || "") + " ";
              }
              html += "</tr>";
            }
            $("#show").append("<hr id=\"anchor_" + blockcount + "\">");
            $('#anchor').append("<a id=\"tag_" + blockcount + "\" href=\"#anchor_" + blockcount + "\" style=\"font-size:25px; \" class=\"btn\"><i class= \"fab fa-slack\" ></i></a>");

            $("#show").append(html);
            $('#load').html("");
            // setTimeout(function (blockcount) {
             let settag = $("#anchor_"+blockcount+"").next().children("td").find("a").text();       
              if (settag.indexOf("信義區") != -1) {
                $("#tag_" + blockcount).append("信義");
              }
              else if (settag.indexOf("大安區") != -1) {
                $("#tag_" + blockcount).append("大安");
              }
              else if (settag.indexOf("中山區") != -1) {
                $("#tag_" + blockcount).append("中山");
              }
              else if (settag.indexOf("松山區") != -1) {
                $("#tag_" + blockcount).append("松山");
              }
              else if (settag.indexOf("中正區") != -1) {
                $("#tag_" + blockcount).append("中正文山");
              }
              else if (settag.indexOf("文山區") != -1) {
                $("#tag_" + blockcount).append("中正文山");
              }
              else if (settag.indexOf("三重區") != -1) {
                $("#tag_" + blockcount).append("三重板橋");
              }
              else if (settag.indexOf("板橋區") != -1) {
                $("#tag_" + blockcount).append("三重板橋");
              }
              else if (settag.indexOf("大同區") != -1) {
                $("#tag_" + blockcount).append("大同萬華");
              }
              else if (settag.indexOf("萬華區") != -1) {
                $("#tag_" + blockcount).append("大同萬華");
              }
              else if (settag.indexOf("新店區") != -1) {
                $("#tag_" + blockcount).append("新店雙和");
              }
              else if (settag.indexOf("永和區") != -1) {
                $("#tag_" + blockcount).append("新店雙和");
              }
              else if (settag.indexOf("中和區") != -1) {
                $("#tag_" + blockcount).append("新店雙和");
              }
              else if (settag.indexOf("士林區") != -1) {
                $("#tag_" + blockcount).append("士林南港內湖");
              }
              else if (settag.indexOf("南港區") != -1) {
                $("#tag_" + blockcount).append("士林南港內湖");
              }
              else if (settag.indexOf("內湖區") != -1) {
                $("#tag_" + blockcount).append("士林南港內湖");
              }
          	  else{
		    $("#tag_" + blockcount).html("");
		  }
            // }, 100, blockcount)
            blockcount++;
          };

        }
      });
      function loading() {
        $('#load').html(' Loading...</br><img   style="display:block; margin:auto;" src="images/UyfU4KX.gif"/>');
      }
      $("#gotop").click(function () {
        jQuery("html,body").animate({
          scrollTop: 0
        }, 1000);
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('#gotop').fadeIn("fast");
        } else {
          $('#gotop').stop().fadeOut("fast");
        }
      });
    });
