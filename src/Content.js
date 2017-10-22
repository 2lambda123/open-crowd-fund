import React from 'react';

import styled from 'styled-components';

import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import monokai from 'react-syntax-highlighter/dist/styles/monokai';

registerLanguage('javascript', js);

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  margin: 0;
  max-width: 100%;
  height: 400px;
`;

const Content = ({ children }) => (
  <div>
    <BannerWrapper>
      <Banner
        src={__PATH_PREFIX__ + '/banner.jpg'}
        alt="Refactoring to concise JavaScript"
      />
    </BannerWrapper>

    <h1>Refactoring to concise JavaScript</h1>

    <p>
      Hey there. My name is Robin Wieruch and over the last year I have written{' '}
      <a href="https://roadtoreact.com/">two ebooks 📚</a> about React.js. One
      of those ebooks was downloaded over 13.000 times, is for free and yet is
      in its 4th edition after being out for only 12 months. It went from 90
      pages to 190 pages. The{' '}
      <a href="https://slack-the-road-to-learn-react.wieruch.com/">
        community
      </a>{' '}
      and I keep it updated, because there are always improvements to teach
      React and it should incluce all the recent best practices from the React
      ecosystem. 🦊
    </p>

    <blockquote>
      <p>
        This is one of the most well-written & informative coding books I've
        ever worked through. A solid React & ES6 introduction.
      </p>
      <p>
        -{' '}
        <a href="https://twitter.com/nhuntwalker/status/845730837823840256">
          Nicholas Hunt-Walker, Instructor of Python at a Seattle Coding School
        </a>
      </p>
      <p>
        Just finished your Road to React. Best book for a beginner in the world
        of React and JS. Elegant exposure to ES. Kudos! :)
      </p>
      <p>
        -{' '}
        <a href="https://twitter.com/kvss1992/status/889197346344493056">
          Karan
        </a>
      </p>
    </blockquote>

    <p>
      The feedback about the book was incredible and suprisingly good.
      The one feedback that I received the most was about the
      usage of concise JavaScript which is accomplished by using functional
      programming principles. Hence the code stays readable and maintainable in the long run.
    </p>

    <p>
      Over time, I collected ideas on how I could funnel this knowledge about
      concise JavaScript into an ebook. The ebook should be for free and
      accessible for everyone, but therefore I would need your support to make
      it happen! 🚀
    </p>

    <blockquote>
      <p>
        <a href="https://twitter.com/andrevar66/status/853789166987038720">
          Andre Vargas
        </a>{' '}
        - The Road to Learn React by Robin Wieruch is such an awesome book! Most
        of what I learned about React and even ES6 was through it!
      </p>
    </blockquote>

    <p>
      Therefore, I wanted to give crowdfunding a shot. 🌟 It would give me the
      neccessary fundings to work fulltime on the ebook for the next two months.
      If you like to see an ever green JavaScript ebook, driven by the
      community, about functional and concise JavaScript, you can support it
      now.
    </p>

    {children}

    <h2>My Plan</h2>

    <p>
      I want to write the ebook almost fulltime for the next 2 months and you
      can <a href="https://github.com/rwieruch/concise-javascript">follow me in realtime</a> on this journey.
      It should give you a clear path beyond the basics of JavaScript. It is aimed at intermediate JavaScript
      developers, however, I believe advanced JavaScript developers can learn the one or other trick as well from it.
    </p>

    <blockquote>
      <p>
        Thanks, really loved the book. Perfect blend to learn React, ES6, and
        higher level programming concepts.
      </p>
      <p>
        -{' '}
        <a href="https://twitter.com/AustinGreen/status/845321540627521536">
          Austin Green
        </a>
      </p>
    </blockquote>

    <p>
      There are already a couple of JavaScript ebooks teaching intermediate
      concepts, but I hope to position the ebook with the primary focus on
      writing concise yet readable JavaScript by using functional programming
      principles and vanilla JavaScript built-in functionalities.
    </p>

    <SyntaxHighlighter language="javascript" style={monokai}>
      {codeStringOne}
    </SyntaxHighlighter>

    <p>
      By using concepts such as higher order functions and newer versions such as JavaScript ES6,
      you can come up with a concise composition of pure JavaScript functions.
    </p>

    <SyntaxHighlighter language="javascript" style={monokai}>
      {codeStringTwo}
    </SyntaxHighlighter>

    <p>
      The primary idea is to show you refactorings from loops to using functions such as map, reduce, and filter in a
      concise way. It breaks your code into smaller blocks and you avoid growing the business logic inside your loops.
    </p>

    <SyntaxHighlighter language="javascript" style={monokai}>
      {codeStringThree}
    </SyntaxHighlighter>

    <p>
      It breaks your code apart into smaller problem solving blocks.
      These function blocks become reusable  for other parts of your application.
      Keeping your code in such functions, makes it maintainable for the longhaul.
      You can test those functions in isolation, but also in combination with each other.
      That's why the book attempts to teach those JavaScript refactorings in a TDD approach.
    </p>

    <SyntaxHighlighter language="javascript" style={monokai}>
      {codeStringTest}
    </SyntaxHighlighter>

    <p>
      However, the ebook should go even furhter by implementing these built-in
      functionalities from vanilla JavaScript or popular utility libraries such
      as <a href="https://lodash.com/">Lodash</a> and{' '}
      <a href="http://ramdajs.com/">Ramda</a> from scratch.
    </p>

    <SyntaxHighlighter language="javascript" style={monokai}>
      {codeStringFour}
    </SyntaxHighlighter>

    <p>
      Furthermore, the ebook should be a practical way to learn about those refactoring. So
      you will code youself while reading the ebook, doing exercises and write tests before refactoring something first.
      It highly emphasizes to enforce your learnings.
    </p>

    <h2>Goals and Perks</h2>

    <p>
      This crowd funding campaign runs until I am able to release the ebook. I
      would aim to make it happen end of December 2017. Even though it doesn't
      get the neccessary fundings, I hope that I can find the resources to make
      it happen. The ebook will come into existence in some form.
    </p>

    <ul>
      <li>
        If more than <strong>2500 €</strong> are funded, I am going to do it!
      </li>
      <li>
        If more than <strong>3500 €</strong> are funded, I am hiring an
        editor/proofreader!
      </li>
      <li>
        If more than <strong>4500 €</strong> are funded, I am hiring an
        illustrator for the cover!
      </li>
      <li>
        If more than <strong>5000 €</strong> are funded, I will find people to translate it!
      </li>
      <li>
        If more than <strong>7500 €</strong> are funded, I provide useful source
        code projects on GitHub to enhance the learning experience!
      </li>
    </ul>

    <p>
      The payments are handled by <a href="https://stripe.com/">Stripe</a> and
      thus your credit card details are securely managed by them. No credit card information is saved on my server.
    </p>

    <p>
      So what are the perks of contributon to this crowdfunding
      campaing if it is not only a free JavaScript ebook for you and the
      community? The ebook will be available for free on an official website and GitHub
      repository.
    </p>

    <ul>
      <li>
        If you contribute <strong>5 € or more</strong>, you will be notified
        about the release to grab a free ebook in PDF, EPUB or MOBI.
      </li>
      <li>
        If you contribute <strong>25 € or more</strong>, you can choose to be
        included in the list of backers on the official website.
      </li>
      <li>
        If you contribute <strong>75 € or more</strong>, you can choose to be
        included in the list of backers in the ebook.
      </li>
      <li>
        If you contribute <strong>500 € or more</strong>, your name, logo and
        link will be included in the list of backers on the official website and
        in the ebook.
      </li>
    </ul>

    <blockquote>
      <p>
        <a href="https://twitter.com/erixtekila/status/840875459730657283">
          Eric Priou
        </a>{' '}
        - The Road to learn React by Robin Wieruch is a must read. Clean and
        concise for React and JavaScript.
      </p>
    </blockquote>

    <p>
      So I have never done such a crowdfunding campaing before and I am excited
      to see people invested in this project. I always relied on my own
      resources to write my content that was read by many people though, but
      this time I hope to get the help of the community to produce a free ebook
      as a fulltime profession.
    </p>

    {children}
  </div>
);

const codeStringOne = `
  // 1: filter a list of articles by popularity
  const popularArticles = articles.filter(function (article) {
    return article.comments > 42;
  });

  // 2: extracting and naming the function
  function isPopular(article) {
    return article.comments > 42;
  }
  const popularArticles = articles.filter(isPopular);

  // 3: using ES6 arrow functions to make it concise
  const isPopular = (article) => article.comments > 42;
  const popularArticles = articles.filter(isPopular);
`;

const codeStringTwo = `
  // 1: filter a list of articles by pattern matching
  const string = 'JavaScript ES6';
  const articlesByName = articles.filter(function (article) {
    return article.name.indexOf(string) !== -1;
  });

  // 2: using ES6 includes built-in function
  const string = 'JavaScript ES6';
  const articlesByName = articles.filter(function (article) {
    return article.name.includes(string);
  });

  // 3: extracting and naming the function
  const string = 'JavaScript ES6';
  function includesName(article) {
    return article.name.includes(string);
  }
  const articlesByName = articles.filter(includesName);

  // 4: using a higher order function to have pure functions
  const string = 'JavaScript ES6';
  function includesName(pattern) {
    return function (article) {
      return article.name.includes(pattern);
    }
  }
  const articlesByName = articles.filter(includesName(string));

  // 5: using ES6 arrow functions to make it concise
  const string = 'JavaScript ES6';
  const includesName = (pattern) => (article) =>
    article.name.includes(pattern);
  const articlesByName = articles.filter(includesName(string));
`;

const codeStringThree = `
  // 1: get popular authors depending on article popularity
  const popularAuthors = [];
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].comments > 42) {
      popularAuthors.push(article[i]);
    }
  }

  // 2: extract two separate functionalities:
  // filter articles by popularity
  // map from article to author
  function isPopular(article) {
    return article.comments > 42;
  }
  function toAuthor(article) {
    return article.author;
  }
  const popularAuthors = articles
    .filter(isPopular)
    .map(toAuthor);

  // 3: using ES6 arrow functions to make it concise
  const isPopular = (article) => article.comments > 42;
  const toAuthor = (article) => article.author;
  const popularAuthors = articles
    .filter(isPopular)
    .map(toAuthor);

  // 4: using non built-in functions from a third-party library
  const isPopular = (article) => article.comments > 42;
  const toAuthor = (article) => article.author;
  const getPopularAuthors = flow(
    filter(isPopular),
    map(toAuthor)
  );

  const popularAuthors = getPopularAuthors(articles);
`;

const codeStringFour = `
  // 1: grouping articles by type
  const articlesGroupedByType = {};
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    let articleType = article.type;

    if (articlesGroupedByType[articleType]) {
      articlesGroupedByType[articleType].push(article);
    } else {
      articlesGroupedByType[articleType] = [article];
    }
  }

  // 2: using a reduce function instead of a for loop
  const articlesGroupedByType = articles.reduce((result, article) => {
    if (result[article.type]) {
      result[article.type].push(article);
    } else {
      result[article.type] = [article];
    }

    return result;
  }, {});

  // 3: using a ternary operator instead of an if else statement
  const articlesGroupedByType = articles.reduce((result, article) => {
    result[article.type] = result[article.type]
      ? result[article.type].push(article)
      : [article];

    return result;
  }, {});

  // 4: extracting the function
  const groupByType = (result, article) => {
    result[article.type] = result[article.type]
      ? result[article.type].push(article)
      : [article];

    return result;
  }

  const articlesGroupedByType = articles.reduce(groupByType, {});
`;

const codeStringTest = `
  assert isPopular
  assert toAuthor
  assert getPopularAuthors
`;

export default Content;
