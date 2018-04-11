// @flow
import * as React from 'react';

import Toolbar from './material-toolbox/toolbar/Toolbar';
import ToolbarRow from './material-toolbox/toolbar/Row';
import ToolbarSection from './material-toolbox/toolbar/Section';
import ToolbarTitle from './material-toolbox/toolbar/Title';
import ToolbarFixedAdjust from './material-toolbox/toolbar/FixedAdjust';

import PermanentDrawer from './material-toolbox/drawer/Permanent';
import DrawerContent from './material-toolbox/drawer/Content';

import MainNav from './MainNav';
import Content from './Content';

export default class App extends React.Component<{}> {
  componentDidMount() {}

  render() {
    return (
      <div className="layout">
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarTitle label="Material Component Web for React - Material Toolbox" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <ToolbarFixedAdjust>
          <main className="main">
            <PermanentDrawer>
              <DrawerContent>
                <MainNav />
              </DrawerContent>
            </PermanentDrawer>
            <div>
              <Content />
            </div>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}

//        <ToolbarFixedAdjust>
//          <main className="demo-content">
//            <div>
//              <Route exact path="/" component={Hero} />
//              <LayoutGrid>
//                <LayoutInner>
//                  <Route path="/animation" component={AnimationPage} />
//                  <Route path="/typography" component={TypographyPage} />
//                  <Route path="/theme" component={ThemePage} />
//                  <Route path="/lists" component={ListsPage} />
//                  <Route path="/layout-grid" component={LayoutGridPage} />
//                  <Route path="/ripples" component={RipplesPage} />
//                  <Route path="/elevation" component={ElevationPage} />
//                  <Route path="/drawers" component={DrawerPage} />
//                  <Route exact path="/buttons" component={ButtonPage} />
//                  <Route path="/buttons/floating" component={FABPage} />
//                  <Route path="/buttons/icons" component={IconTogglePage} />
//                  <Route path="/cards" component={CardPage} />
//                  <Route path="/dialogs" component={DialogPage} />
//                  <Route path="/grid-lists" component={GridListPage} />
//                  <Route path="/rtl" component={RTLPage} />
//                  <Route path="/menus" component={MenuPage} />
//                  <Route path="/toolbars" component={ToolbarPage} />
//                  <Route path="/snackbars" component={SnackbarPage} />
//                  <Route
//                    path="/inputs-controls/select-menus"
//                    component={SelectPage}
//                  />
//                  <Route
//                    path="/inputs-controls/sliders"
//                    component={SliderPage}
//                  />
//                  <Route
//                    path="/inputs-controls/switches"
//                    component={SwitchPage}
//                  />
//                  <Route
//                    path="/inputs-controls/text-fields"
//                    component={TextFieldPage}
//                  />
//                  <Route
//                    path="/linear-progress"
//                    component={LinearProgressPage}
//                  />
//                </LayoutInner>
//              </LayoutGrid>
//            </div>
//          </main>
//        </ToolbarFixedAdjust>
