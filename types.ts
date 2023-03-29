export type NtfyMessagePriority =
  | '5'
  | 'max'
  | 'urgent'
  | '4'
  | 'high'
  | '3'
  | 'default'
  | '2'
  | 'low'
  | '1'
  | 'min'

export type NtfyMessageOptions = {
  server?: string
  topic: string
  priority?: NtfyMessagePriority
  title?: string
  message?: string
  tags?: string[]
  cache?: boolean
  clickURL?: string
  iconURL?: string
  fileAttachmentURL?: string
  fileName?: string
}

export type FetchHeaders = {
  Title?: string
  Priority?: NtfyMessagePriority
  Tags?: string
  Click?: string
  Icon?: string
  Attach?: string
  Filename?: string
  Cache?: 'no'
}
