using System.Web;
using System.Web.Optimization;

namespace Project.Managment
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //This ScriptBundle will use for login layout only
            #region LOGIN SCRIPTS.* / StyleBundle.*
            bundles.Add(new StyleBundle("~/public/css").Include(
                      "~/Asset/css/font-awesome.css",
                      "~/Asset/css/style.css",
                      "~/Asset/css/pages/signin.css"));

            bundles.Add(new ScriptBundle("~/bundles/public").Include(
                        "~/Asset/js/js/signin.js"));
            #endregion

            #region DASHBOARD
            bundles.Add(new StyleBundle("~/dashboard/css").Include(
                      //"~/Asset/css/bootstrap.min.css",
                      "~/Asset/css/bootstrap-responsive.min.css",
                      "~/Asset/css/font-awesome.css",
                      "~/Asset/css/style.css",
                      "~/Asset/css/pages/dashboard.css",
                      "~/Asset/css/custom.css"
                      ));

            bundles.Add(new ScriptBundle("~/dashboard/public").Include(
                      //"~/Asset/js/excanvas.min.js",
                      //"~/Asset/js/chart.min.js",
                      //"~/Asset/js/full-calendar/fullcalendar.min.js",
                      "~/Asset/js/base.js"));



            #endregion




            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
