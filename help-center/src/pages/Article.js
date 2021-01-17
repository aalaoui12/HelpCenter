import React from "react";
import {useParams} from "react-router-dom";

const Article = (props) => {

  const aboutData = [
    {
      "slug": "why-puzzl-is-your-solution",
      "title": "Why Puzzl is Your Solution",
      "subtitle": "What Puzzl Does Right",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "slug": "puzzl-integrations",
      "title": "Puzzl Integrations",
      "subtitle": "Puzzl Integrates with Over 10 Providers",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    },
    {
      "slug": "puzzl-for-enterprises",
      "title": "Puzzl for Enterprises",
      "subtitle": "We Offer Enterprise Solutions",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    },
    {
      "slug": "puzzl-for-small-businesses",
      "title": "Puzzl for Small Businesses",
      "subtitle": "We Scale with You",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    },
    {
      "slug": "how-does-payroll-work",
      "title": "How Does Payroll Work?",
      "subtitle": "The Ins and Outs of Payroll",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    },
    {
      "slug": "puzzl-ui-integrations",
      "title": "Puzzl UI Integrations",
      "subtitle": "Puzzl Offers Pre-Built Dashboards",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    },
    {
      "slug": "payment-methods",
      "title": "Payment Methods",
      "subtitle": "The Different Payment Methods at Puzzl",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tellus at urna condimentum mattis pellentesque. Eu facilisis sed odio morbi. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Placerat vestibulum lectus mauris ultrices eros in. Lacus laoreet non curabitur gravida. Aliquam nulla facilisi cras fermentum odio. Aliquam sem et tortor consequat id porta nibh venenatis. Et tortor at risus viverra adipiscing. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus."
    }
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const { title, subtitle, content } = aboutContent;

  return (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{content}</p>
  </div>
)
}
export default Article;