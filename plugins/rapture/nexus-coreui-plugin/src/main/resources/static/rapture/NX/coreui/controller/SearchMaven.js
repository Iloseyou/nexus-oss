/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-2015 Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Maven repository search contribution.
 *
 * @since 3.0
 */
Ext.define('NX.coreui.controller.SearchMaven', {
  extend: 'Ext.app.Controller',
  requires: [
    'NX.I18n',
  ],

  /**
   * @override
   */
  init: function() {
    var me = this,
        search = me.getController('NX.coreui.controller.Search');

    search.registerCriteria([
      {
        id: 'attributes.maven.groupId',
        group: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_GROUP_MAVEN'),
        config: {
          fieldLabel: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_MAVEN_GROUP_ID'),
          width: 250
        }
      },
      {
        id: 'attributes.maven.artifactId',
        group: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_GROUP_MAVEN'),
        config: {
          fieldLabel: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_MAVEN_ARTIFACT_ID'),
          width: 250
        }
      },
      {
        id: 'attributes.maven.classifier',
        group: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_GROUP_MAVEN'),
        config: {
          fieldLabel: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_MAVEN_CLASSIFIER')
        }
      },
      {
        id: 'attributes.maven.packaging',
        group: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_GROUP_MAVEN'),
        config: {
          fieldLabel: NX.I18n.get('BROWSE_SEARCH_COMPONENTS_CRITERIA_MAVEN_PACKAGING')
        }
      }
    ], me);

    search.registerFilter({
      id: 'maven2',
      name: 'Maven',
      text: NX.I18n.get('BROWSE_SEARCH_MAVEN_TITLE'),
      description: NX.I18n.get('BROWSE_SEARCH_MAVEN_SUBTITLE'),
      readOnly: true,
      criterias: [
        { id: 'format', value: 'maven2', hidden: true },
        { id: 'attributes.maven.groupId' },
        { id: 'attributes.maven.artifactId' },
        { id: 'version' },
        { id: 'attributes.maven.classifier'},
        { id: 'attributes.maven.packaging' }
      ]
    }, me);
  }

});
