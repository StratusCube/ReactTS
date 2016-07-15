using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactTS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ReactTS() {
            ViewData["Message"] = "See the test components below";
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
