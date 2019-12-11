using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Project.Managment.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        /// <summary>
        /// Dashboard Page / 
        /// </summary>
        /// <returns>Entery Point</returns>
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DetailResources()
        {
            return View();
        }


    }
}