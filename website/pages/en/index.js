/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Get started</Button>
            <Button href={docUrl('installation.html')}>Read the docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const CenterBlock = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'To install and use the \`xd-dialog-helper\` for your plugin, simply run (if you use npm) \n' +
              '```\n' +
              'npm install xd-dialog-helper\n' +
              '```\n' +
              'in the command line. Now, you can quickly import the module by using \`const DialogHelper = require("xd-dialog-helper");\` and get started building dialogs.\n\n' +
          '[Find out how to build your first dialog](/docs/installation#importing-the-library)',
          // TODO: Add link to getting started section above.
          image: `${baseUrl}img/undraw_code_review_l1q9.svg`,
        imageAlign: 'left',
        title: 'Use it in your plugin',
      },
    ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
`While, of course, I can't take the "burden" of programming the plugin off of you 
(and I also wouldn't want to do that), user interfaces are best-built in a prototyping 
kind of matter that allows for quick iterations. For this reason, there is a WYSIWYG-Editor 
that lets you generate the code for a modal you put together. The code is perfectly 
readable and easy to edit, meaning you can quickly build a first iteration of your dialog 
and refine from there...
              
[WYSIWYG-Editor](${baseUrl}editor)`,
            image: `${baseUrl}img/undraw_building_blocks_n0nc.svg`,
            imageAlign: 'right',
            align: 'left',
            title: 'WYSIWYG-Editor',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light" align="left">
        {[
          {
            content:
              `Creating dialogs for your plugins can be hard. This, however, **should not stop you** 
from having dialogs to interact with users for your plugin, especially not with plugins 
for an application where UX designers are the main target group.
              
No matter whether you're a developer and simply do not want to write all the almost 
unmaintainable boilerplate code of showing and evaluating dialogs, or you're someone
not so experienced with code who's written a handy plugin, this library can help you add
a modal to your plugin with ease, giving your users the best, custom experience they can have.
              `,
            image: `${baseUrl}img/undraw_add_user_ipe3.svg`,
            imageAlign: 'right',
            align: 'left',
            title: 'Making it easy to let the user decide',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <CenterBlock layout="fourColumn">
        {[
          {
            content: 'No need for boilerplate code, complex results parsing etc.',
            image: `${baseUrl}img/undraw_joyride_hnno.svg`,
            imageAlign: 'top',
            title: 'Easy to use',
          },
          {
            content: 'Supporting custom components, complete customization and more to make dialogs fit your plugin, and not the other way around.',
            image: `${baseUrl}img/undraw_pen_nqf7.svg`,
            imageAlign: 'top',
            title: 'Customizable',
          },
          {
            content: 'Describe what the dialog should do, we take care of the how',
            image: `${baseUrl}img/undraw_user_flow_vr6w.svg`,
            imageAlign: 'top',
            title: 'Declarative',
          },
        ]}
      </CenterBlock>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>xd-dialog-helper is used by all these projects</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
