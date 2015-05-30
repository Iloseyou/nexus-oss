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
package org.sonatype.nexus.orient.entity;

import org.sonatype.nexus.common.entity.EntityId;
import org.sonatype.nexus.common.entity.EntityMetadata;
import org.sonatype.nexus.common.entity.EntityVersion;

import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.version.ORecordVersion;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Attached {@link EntityMetadata}.
 *
 * @since 3.0
 */
public class AttachedEntityMetadata
    implements EntityMetadata
{
  private final EntityAdapter owner;

  private final ODocument document;

  private EntityId id;

  private EntityVersion version;

  public AttachedEntityMetadata(final EntityAdapter owner, final ODocument document) {
    this.owner = checkNotNull(owner);
    this.document = checkNotNull(document);
  }

  public ODocument getDocument() {
    return document;
  }

  @Override
  public EntityId getId() {
    if (id == null) {
      id = new AttachedEntityId(owner, document);
    }
    return id;
  }

  protected ORecordVersion getRecordVersion() {
    return document.getRecordVersion();
  }

  @Override
  public EntityVersion getVersion() {
    if (version == null) {
      version = new EntityVersion(getRecordVersion().toString());
    }
    return version;
  }

  @Override
  public String toString() {
    return getClass().getSimpleName() + "{" +
        "id=" + id +
        ", version=" + version +
        '}';
  }
}
