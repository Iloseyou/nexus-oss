/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2007-2013 Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/**
 * Search panel.
 * TODO implement
 *
 * @since 3.0
 */
Ext.define('NX.view.Search', {
  extend: 'Ext.Panel',
  alias: 'widget.nx-search',

  layout: {
    type: 'vbox',
    align: 'stretch',
    pack: 'start'
  },

  items: [
    {
      xtype: 'label',
      itemId: 'one',
      text: 'Enter a value in quick search above ^',
      style: {
        'color': '#000000',
        'font-size': '20px',
        'font-weight': 'bold',
        'text-align': 'center',
        'padding': '20px'
      }
    },
    {
      xtype: 'label',
      itemId: 'two',
      text: '',
      style: {
        'color': '#000000',
        'font-size': '20px',
        'font-weight': 'bold',
        'text-align': 'center',
        'padding': '20px'
      }
    },
    {
      xtype: 'label',
      itemId: 'three',
      text: '',
      style: {
        'color': '#000000',
        'font-size': '20px',
        'font-weight': 'bold',
        'text-align': 'center',
        'padding': '20px'
      }
    }
  ]
});