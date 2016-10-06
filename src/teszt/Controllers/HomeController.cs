using Microsoft.AspNetCore.Mvc;

namespace teszt.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
