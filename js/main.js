function RefreshCartItemsCount()
{
	var cartItemsCount = document.getElementById("cartitemscount");
	if (cartItemsCount)
	{
		if(cart.length > 0)
		{
			cartItemsCount.style.display = "inline-block";
			cartItemsCount.innerHTML =  cart.length;			
		}
		else
		{
			cartItemsCount.style.display = "inline-block"; //"none";
			cartItemsCount.innerHTML =  cart.length;			
		}
		
		var cartMenuItem = document.getElementById("cartMenuItem");		
		if (cartMenuItem)
		{
			cartMenuItem.title = "Cosul de cumparaturi\u000dArticole: " + cart.length;
		}
	}
}

function Page_OnResize(imagesPath)
{
	var banner = document.getElementById("banner");
	
	if (banner)
	{
		var w = document.documentElement.clientWidth; // || documentBody.clientWidth || window.innerWidth;
		
		if (w>=721)
		{
			banner.innerHTML = "<div style=\"background-image:url(" + imagesPath + "banner/1920L.png); height:480px; background-repeat:no-repeat; background-attachment:scroll; background-clip: border-box; background-origin:padding-box; background-position-x:center; background-size:auto auto; display:block; box-sizing:inherit;\"></div>";
		}
		if (w<=1080)
		{
			banner.innerHTML = "<div style=\"background-image:url(" + imagesPath + "banner/720L.png); height:320px; background-repeat:no-repeat; background-attachment:scroll; background-clip: border-box; background-origin:padding-box; background-position-x:center; background-size:auto auto; display:block; box-sizing:inherit;\"></div>";
		}
		if (w<=720)
		{
			banner.innerHTML = "<div style=\"background-image:url(" + imagesPath + "banner/320L.png); height:320px; background-repeat:no-repeat; background-attachment:scroll; background-clip: border-box; background-origin:padding-box; background-position-x:center; background-size:auto auto; display:block; box-sizing:inherit;\"></div>";
		}		
	}
	RefreshPosition();
}

function Page_OnLoad(addCart, showInfoBar, showCookiesBar, isStore, imagesPath, isMainPage) 
{
	InitializeComponent(isStore, addCart, imagesPath, isMainPage);
	if (showInfoBar == true)
	{
		InitializeInfoBar(imagesPath);
	}
	if (showCookiesBar == true)
	{
		InitializeCookiesBar(imagesPath);
	}
	$.smoothAnchors("slow");

	Page_OnResize(imagesPath);
}

function RefreshPosition()
{
	var wb = document.getElementById("warning-bar");
	var sectionTag1 = document.getElementById("sectionTag1");
	var sectionTag2 = document.getElementById("sectionTag2");
	var sectionTag3 = document.getElementById("sectionTag3");
	var mainContent = document.getElementById("main-content");
	var header = document.getElementById("header");	
	
	if (wb)
	{
		header.setAttribute('style', 'top:' + wb.clientHeight + 'px;');
		
		var contentHeight = wb.clientHeight + header.clientHeight;
		if (mainContent)
		{
			mainContent.setAttribute('style', 'top:' + contentHeight + 'px;');
		}
		
		if (sectionTag1)
		{
			sectionTag1.setAttribute('style', 'height:' + contentHeight + 'px; margin-top:' + -contentHeight + 'px;');
		}
		if (sectionTag2)
		{
			sectionTag2.setAttribute('style', 'height:' + contentHeight + 'px; margin-top:' + -contentHeight + 'px;');
		}
		if (sectionTag3)
		{
			sectionTag3.setAttribute('style', 'height:' + contentHeight + 'px; margin-top:' + -contentHeight + 'px;');
		}
	}
	else	
	{
		if (mainContent)
		{
			mainContent.setAttribute('style', 'top:' + header.clientHeight + 'px;');
		}
		if (sectionTag1)
		{
			sectionTag1.setAttribute('style', 'height:' + header.clientHeight + 'px; margin-top:' + -header.clientHeight + 'px;');
		}
		if (sectionTag2)
		{
			sectionTag2.setAttribute('style', 'height:' + header.clientHeight + 'px; margin-top:' + -header.clientHeight + 'px;');
		}
		if (sectionTag3)
		{
			sectionTag3.setAttribute('style', 'height:' + header.clientHeight + 'px; margin-top:' + -header.clientHeight + 'px;');
		}
	}
	
	var footerBar = document.getElementById("cookies-bar");
	var footerCopyright = document.getElementById("footer-copyright-ws");
	if (footerBar)
	{
		var val = footerBar.clientHeight + 48;
		footerCopyright.setAttribute('style', 'height:' + val + 'px;');
	}
}

function InitializeComponent(isStore, addCart, imagesPath, isMainPage)
{
	var storeString = "Magazin";
	if (isStore == true)
	{
		storeString = "Produse";
	}
	
	var homeMenu = "<a href=\"./\">{0}</a>";
	var storeMenu = "<a href=\"https://store.mediosmedical.ro\">{0}</a>";
	var servicesMenu = "<a href='./#exams'>SERVICII</a>";
	var cartMenu = "";
	var appLogo = "<a href=\"https://www.mediosmedical.ro\" style=\"display:block;\"><img class=\"header-logo\" src=\"" + imagesPath + "logo.png\" alt=\"Medios Medical Center\"/></a>";
	
	if (isMainPage == true)
	{
		servicesMenu = "<a href='#exams'>SERVICII</a>";
		homeMenu = "<a href=\"#home\">{0}</a>";
	}
	if (addCart == true)
	{
		cartMenu = 
		"<td id=\"cartMenuItem\" class=\"menu-item\" style=\"cursor:pointer;\" title=\"Cosul de cumparaturi\">" +
		"<center>" +
		"<a href=\"cart\">" +
		"<table cellpadding=\"0\" cellspacing=\"0\"><tr><td>COS&nbsp;</td><td><img class=\"cart-image\" src=\"" + imagesPath + "cart.png\"/>" +
		"<span class=\"cart-items-count\" id=\"cartitemscount\">99</span></td></tr></table>" +
		"</a>" +
		"</center>" +
		"</td>";		
	}
	if (isStore == true)
	{
		servicesMenu = "<a href='https://www.mediosmedical.ro/#exams'>SERVICII</a>";
		storeMenu = "<a href=\"./\">{0}</a>";
		if (isMainPage)
		{
			storeMenu = "<a href=\"#products\">{0}</a>";
		}
		appLogo = "<a href=\"https://store.mediosmedical.ro\" style=\"display:block;\"><img class=\"header-logo\" src=\"" + imagesPath + "logo-store.png\" alt=\"Medios Online Store\"/></a>";
	}

	var header = document.getElementById("header");
	if (header)
	{
		var row = header.insertRow(0);
		if (row)
		{
			var cell = row.insertCell(0);
			if (cell)
			{
				cell.innerHTML = 
				"<!--[if lt IE 9]>" +
				"<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"display:inline-block;\">" +
				"<tr>" +
				"<td class=\"header-cell\" style=\"background:#005B99;\">" + appLogo + "</td>" +
				"<td class=\"menu-separator\"></td>" +
				"<td class=\"menu-item\">" +
				homeMenu.replace("{0}", "ACAS&#258;") +
				"</td>" +
				"<td class=\"menu-item\">" + servicesMenu + "</td>" +
				"<td class=\"menu-item\">" +
				storeMenu.replace("{0}", storeString.toUpperCase()) +
				"</td>" +
				"<td class=\"menu-item\">" +
				"<a href=\"#contact\">CONTACT</a>" +
				"</td>" +
				cartMenu +
				"</tr>" +
				"</table>" +
				"<![endif]-->" +
				
				"<!--[if gt IE 8]> <!-- -->" +
				"<table class=\"header-menu\" cellpadding=\"0\" cellspacing=\"0\">" +
				"<tr>" +
				"<td class=\"header-cell\">" + appLogo + "</td>" +
				"<td class=\"menu-separator\"></td>" +
				"</tr>" +
				"</table>" +
				"<table class=\"header-menu\" cellpadding=\"0\" cellspacing=\"0\">" +
				"<tr>" +
				"<td class=\"header-menu-cell\">" +
				"<table cellpadding=\"0\" cellspacing=\"0\" align=\"center\">" +
				"<tr id=\"main-menu\">" +
				"<td class=\"menu-item\">" +
				"<center>" +
				homeMenu.replace("{0}", "ACAS&#258;") + 
				"</center>" +
				"</td>" +				
				"<td class=\"menu-item\"><center>" + servicesMenu + "</center></td>" +
				"<td class=\"menu-item\">" +
				storeMenu.replace("{0}", storeString.toUpperCase()) +
				"</td>" +
				"<td class=\"menu-item\">" +
				"<center><a href=\"#contact\">CONTACT</a></center>" +
				"</td>" +
				cartMenu +				
				"</tr>" +
				"</table>" +
				"</td>" +
				"</tr>" +
				"</table>" +
				"<div id='theme-button' style='position:absolute; width:100%; pointer-events:none; height:80px; margin-top:-80px;'><a id='maximizeButton' class='maximize-button' onclick='Maximize()'></a></div>" +
				"<!-- <![endif]-->";
			}
		}
	}
	
	var map  = document.getElementById("map");
	if (map)
	{
		var imageName = "medios-center-map-l.png";
		if (isStore == true)
		{
			imageName = "medios-store-map-l.png";
		}
		map.innerHTML = "<div style=\"background-image:url(" + imagesPath + "/map/" + imageName + "); height:320px; background-repeat:no-repeat; background-attachment:scroll; background-clip:border-box; background-origin:padding-box; background-position-x:center; background-size:auto auto; display:block; box-sizing:inherit; outline:1px solid #F7F7F7;\"></div>";
	}
		
	var footerContact = document.getElementById("footerContact");
	if (footerContact)
	{
		try
		{		
			var request = new XMLHttpRequest();
			request.onreadystatechange = function()
			{
				if (this.readyState == 4 && this.status == 200) 
				{
					var xmlDoc = this.responseXML;
					
					var contactElement = xmlDoc.getElementsByTagName("contact");
					var contact = contactElement[0].text || contactElement[0].textContent;
					contact = contact.replace(/^\s+|\s+$/g, '');
					contact = contact.replace(/\n/g, '<br/>');

					var programElement = xmlDoc.getElementsByTagName("program");
					var program = programElement[0].text || programElement[0].textContent;
					program = program.replace(/^\s+|\s+$/g, '');
					program = program.replace(/\n/g, '<br/>');
					
					footerContact.innerHTML = 
					"<table cellpadding=\"0\" cellspacing=\"0\" align=\"center\" border=\"0\">" +
					"<tr><td>" +
					
					"<table style=\"display:inline-block; min-width:300px; margin-top:10px; margin-bottom:10px; margin-left:10px;\" cellspacing=\"0\" cellpadding=\"0\">" +
					"<tr><td class=\"footer-title\">PROGRAM</td></tr>" +
					"<tr><td style=\"white-space:nowrap; text-align:left;\">" + program + "</td></tr>" +
					/*
					"<tr><td style=\"white-space:nowrap; text-align:left;\">S&#226;mb&#259;t&#259;: 09:00-13:00</td></tr>" +
					"<tr><td style=\"white-space:nowrap; text-align:left;\">Duminic&#259;: &#206;nchis</td></tr>" +
					*/
					"</table>" +

					"<table style=\"display:inline-block; margin-top:10px; margin-bottom:10px; margin-left:10px; margin-right:10px;\" cellspacing=\"0\" cellpadding=\"0\">" +
					"<tr><td class=\"footer-title\">CONTACT</td></tr>" +
					"<tr><td style=\"white-space:nowrap; text-align:left;\">" + contact + "</td></tr>" +
					/*
					"<tr><td style=\"white-space:nowrap; text-align:left;\">Tel: 0743929996</td></tr>" +
					"<tr><td style=\"white-space:nowrap; text-align:left;\">Email: mediosmedical@gmail.com</td></tr>" +
					*/		
					"</table>" +

					"</td></tr>" +
					"</table>";
				}
			};
			request.open("GET", "info.xml", true);
			request.send();
		}
		catch(ex){}
	}
	
	var footerMenu = document.getElementById("footerMenu");
	if (footerMenu)
	{
		footerMenu.innerHTML = 
		"<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:14px; color:#999999; margin-left:10px;\">" +
		"<tr>" +
		"<td><img class=\"logo-footer\" src=\"" + imagesPath + "logo_small.png\"/></td>" +
		"<td>" +
		"<table cellpadding=\"0\" cellspacing=\"0\" style=\"display:inline-table;\">" +
		"<tr><td class=\"footer-menu\">" + homeMenu.replace("{0}", "Acasa") + "</td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +		
		"<td class=\"footer-menu\"><a href=\"https://www.mediosmedical.ro/#exams\">Servicii</a></td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"<td class=\"footer-menu\">" + storeMenu.replace("{0}", storeString) + "</td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"<td class=\"footer-menu\"><a href=\"#contact\">Contact</a></td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"<td class=\"footer-menu\"><a href=\"rgpd\">RGPD</a></td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"</tr>" +
		"</table>" +
		"<table cellpadding=\"0\" cellspacing=\"0\" style=\"display:inline-table;\">" +
		"<tr>" +
		"<td class=\"footer-menu\"><a href=\"http://anpc.gov.ro\">ANPC</a></td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"<td class=\"footer-menu\"><a href=\"terms\">Termeni si conditii</a></td>" +
		"<td style=\"vertical-align:middle;\"><a class=\"footer-separator\"></a></td>" +
		"<td class=\"footer-menu\"><a href=\"cookiespolicy\">Politica de cookies</a></td>" +		
		"</tr></table>" +
		"</td></tr></table>";
	}
	
	var footerCopyright = document.getElementById("footer-copyright-ws");
	if (footerCopyright)
	{
		footerCopyright.innerHTML = "<p>&#169; 2019 MEDIOS MEDICAL CENTER. Toate drepturile rezervate.</p>";
		if (isStore == true)
		{
			footerCopyright.innerHTML = "<p>&#169; 2019 MEDIOS ONLINE STORE. Toate drepturile rezervate.</p>";
		}
	}
}

function InitializeInfoBar(imagesPath)
{
	var info = GetCookie("headerBar");
	if (info)
	{
		return;
	}

	var headerBar = document.getElementById("headerBar");
	if (headerBar)
	{
		headerBar.innerHTML = 		
		"<table id=\"warning-bar\" class=\"info-bar\" cellpadding=\"0\" cellspacing=\"0\">" +
		"<tr>" +
		"<td style=\"text-align:right; padding-right:10px;\"><img class=\"info-bar-icon\" src=\"" + imagesPath + "info.png\"/></td>" +
		"<td class=\"info-bar-container\">" +
		"<div class=\"info-bar-content\">" +
		"<a title=\"" + 
		"TBA" + 
		"\">" + 
		"Program de lucru pentru perioada [29.12.2018 - 02.01.2019]" + "<br/>" +
		"24.12.2018, 27.12.2018, 28.12.2018 : 08:30 - 18:00" + "<br/>" +
		"25.12.2018, 26.12.2018 : Inchis" + "<br/>" +
		"29.12.2018 - 02.01.2019 : Inchis" +
		"</a>" +
		"</div>" +
		"</td>" +
		"<td class=\"info-bar-cell\"><button class=\"button\" onclick=\"WarningButton_Click()\">OK</button></td>" +
		"</tr>" +
		"</table>";
	}
}

function InitializeCookiesBar(imagesPath)
{
	var footerBar = GetCookie("footerBar");
	if (footerBar)
	{
		return;
	}
	
	var footerBar = document.getElementById("footerBar");
	if (footerBar)
	{
		footerBar.innerHTML = 		
		"<table id=\"cookies-bar\" class=\"cookiesbar\" cellpadding=\"0\" cellspacing=\"0\">" +
		"<tr>" +
		"<td style=\"text-align:right; padding-right:10px;\"><img class=\"info-bar-icon\" src=\"" + imagesPath + "info.png\"/></td>" +
		"<td class=\"info-bar-container\" style=\"font-weight:normal;\">" +
		"<div class=\"info-bar-content\">" +
		"<a>Informa&#539;ie: Acest website foloseste cookies. Navigand in continuare, va exprimati acordul asupra <a class=\"hyperlink-highlight\" href=\"cookiespolicy\">politicii de cookies</a>!</a>" +
		"</td>" +
		"<td class=\"info-bar-cell\"><button class=\"button\" onclick=\"CookiesButton_Click()\">OK</button></td>" +
		"</tr>" +
		"</table>";
	}
}

function Maximize()
{
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
