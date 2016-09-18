using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TechTalkers.Web.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TechTalkers.Web.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return new Contact[]
            {
                new Contact
                {
                    Id = 1,
                    Name = "Faturama",
                    Number = "(555) 251-1234",
                    Image = "http://lorempicsum.com/futurama/255/200/2"
                },
                new Contact
                {
                    Id = 2,
                    Name = "Rio",
                    Number = "(555) 786-9841",
                    Image = "http://lorempicsum.com/rio/255/200/2"
                },
                new Contact
                {
                    Id = 3,
                    Name = "The Simsons",
                    Number = "(555) 314-1592",
                    Image = "http://lorempicsum.com/simpsons/255/200/2"
                }
            };
            ;
        }
    }
}
