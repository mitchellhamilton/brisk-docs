import React from 'react';
import { BackItem, MenuSection, Separator } from '@atlaskit/navigation-next';
import pageInfo from '../../pages-list';
import LinkComponent from './link-component';
import NavHeader from './nav-header';
import TreeNavContent, { arrayToTreeItems } from './tree-nav-content';

const NavContent = () => {
  const treeData = {
    rootId: 'docs',
    items: arrayToTreeItems(pageInfo.docs, {
      parentId: 'docs',
      parentTitle: 'Docs',
    }),
  };

  return (
    <>
      <NavHeader headerText="Docs" />
      <MenuSection id="docs-section" parentId="index-section">
        {({ className }) => (
          <div className={className}>
            <BackItem text="Back to home" href="/" component={LinkComponent} />
            <Separator />
            <TreeNavContent treeData={treeData} />
          </div>
        )}
      </MenuSection>
    </>
  );
};

export default NavContent;
