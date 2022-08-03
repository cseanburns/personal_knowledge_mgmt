# Back Up Your Work

## Readings

- Velazco, C. (2022). Help desk quick fix: How to back up your phone before you
  lose it. *The Washington Post*. Retrieved from [Washington Post][backupWashPost]
- Back up your Mac. Apple. Retrieved from [Apple][macBackup]
- Backup and Restore in Windows. Retrieved from [Microsoft][microsoftBackup]

## Introduction

Many of us nowadays have multiple devices, like laptops and smartphones, and
obviously, as we use those devices, those devices become filled with important
files, settings, texts, and so forth that we probably don't want to lose. As a
result, it's a good idea to back up these devices to help insure that we can
restore our data if something happens to the device.

Unfortunately, methods to back up our data vary depending on the smartphone
maker (Android, iPhone, etc) and laptop/desktop (Windows, Apple). We also have
a variety of storage options, and the two biggest options are the cloud, like
iCloud, Dropbox, Google Drive, and extra storage devices, like external hard
drives or large data capacity USB drive.

In this lecture, I cover how to back up your phones and laptops/desktops for
long term storage.

## Smartphones

A good backup strategy to follow is to first backup your phone, either to the
cloud or to your computer, and then back up your computer. This is because we
sometimes will want to use our computers as backups for our phones.

To get started, *The Washington Post* [has a couple of helpful][backupWashPost]
videos on how to back up your iPhone or Android smartphones. 

## Macs

For instructions on backing up your Mac,
you should follow [Apple's instructions][macBackup],
which shows you how to back up your device using Time Machine or iCloud.
The instructions also show you how to restore your Mac from a backup, how to
check your storage capacity, how to free up storage, and more.

If you select to backup with Time Machine, you can select a backup disk, like
an external hard drive or large data capacity USB drive.

## Windows

For instructions on backing up your Windows computer, you should likewise start
with [Microsoft's instructions][microsoftBackup]. The instructions at the prior
link show how to backup for either Windows 10 or Windows 11. As with Macs, if
you can elect to backup your files using an external disk or a cloud solution.
Microsoft's instructions also cover how to restore your data if necessary.

## External Drives 

External hard drives are a great solution for backing up your system.
Today's drives are relatively inexpensive.
A 2TB external hard drive may cost as little as $60.
The advantage of using an external hard drive is that you pay 
a one-time cost (the cost of the drive).

External hard drives require some setup
because different operating systems use different file system formats.
If you are using a macOS computer,
you will want to format your drive using [Disk Utility][diskUtility].
macOS uses the [Apple File System (APFS)][macFileSystem] by default.
If you are using a Windows computer,
you can use [File Explorer][fileExplorer], and
you will most likely want to format your drive
using the [New Technology File System (NTFS)][ntfsFileSystem], 
However, if you want to be able to access your external
drive from an Apple computer,
you should format the drive using the **exFAT** file system.

### Encrypting External Drives

One of the disadvantages of an external hard drive
is that because it's portable,
it can be lost or misplaced.
Therefore, when you begin to format your disk,
you may want to set up encryption so that 
the drive is protected from other people.

You setup encryption on macOS when you format the drive.
Apple provides instructions on its page on
[Encrypt and protect a storage device][macosEncrypt]
with a password using Disk Utility on Mac.
Microsoft also provides instructions for encrypting
on [Windows 10/11][windowsEncrypt].
Be sure to use a strong password, and
be sure to keep that password safe.
Also, be aware that if you lose the password, or forget it,
then you lose access to the drive.

It's usually a good idea to keep your external drive
in a separate location from the device that you're backing up.
This is in case your main device gets stolen
or is destroyed by fire, flooding, etc.
However, the downside is that this makes it less likely that 
you backup regularly, and
**it's important to keep regular backups of your data**.
Therefore, one option is to purchase a smaller drive 
that you use to backup the most sensitive data
(e.g., medical information, financial information, etc)
and store that off-site and encrypted,
and use an additional drive that you keep on hand (and encrypted)
for daily or regular backups.

## Cloud Solutions

An additional backup option is to use a cloud solution.
For macOS users, you can use iCloud to back up the files
on all of your devices, as described above.

Some of the big name options include:

- [Dropbox][dropboxBackup]
- [OneDrive][onedriveBackup]
- [Google Drive][googleBackup]

There are also less well-known but seemingly respected backup solutions,
like [Backblaze][backblaze] and [iDrive][idrive].
[Tom's Guide][tomsBackupServices] has reviews those and others.

The main advantage of a cloud solution is that
you can set it and forget it.
The main disadvantage is that the amount of data 
you may want to backup may require paying a monthly fee.

When choosing a cloud backup solution,
you may want to consider if the service meets 
the following criteria:

- storage size options
- cost
- disk recovery options
- backup and syncing speeds
- web access
- ease of use
- multiple devices (smartphones and/or laptops/desktops)
- security
- version history

## Conclusion

All storage devices fail eventually, 
or may get damaged, lost, stolen, etc.,
and it really hurts to lose important files,
like photos of loved ones or homework and projects, etc.
Backing up your devices is how we prevent or reduce losing that data.

In this section, we covered various methods to backup your data.
Unfortunately, every solution requires some cost, and
so you have to weigh that cost with your sense of risk
and with what you might lose if you don't backup.

Note that if you are really risk averse,
an additional option is to use both
external storage devices and cloud solutions.
You can backup your entire disk using a cloud solution,
or just select folders,
and then backup your entire disk with an external drive.

Whatever option you choose,
be sure to back up regularly.

[backupWashPost]:https://www.washingtonpost.com/technology/2022/04/11/help-desk-quick-fix/
[macBackup]:https://support.apple.com/mac-backup
[microsoftBackup]:https://support.microsoft.com/en-us/windows/back-up-and-restore-your-pc-ac359b36-7015-4694-de9a-c5eac1ce9d9c
[diskUtility]:https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac
[macFileSystem]:https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/21.0/mac/12.0
[fileExplorer]:https://www.hellotech.com/guide/for/how-to-format-a-hard-drive-windows-10
[ntfsFileSystem]:https://docs.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview
[macosEncrypt]:https://support.apple.com/guide/disk-utility/encrypt-protect-a-storage-device-password-dskutl35612/mac
[windowsEncrypt]:https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838#ID0EBD=Windows_11
[backblaze]:https://www.backblaze.com/cloud-backup.html
[idrive]:https://www.idrive.com/
[tomsBackupServices]:https://www.tomsguide.com/best-picks/best-cloud-backup
[dropboxBackup]:https://help.dropbox.com/installs-integrations/desktop/how-to-use-dropbox-backup
[onedriveBackup]:https://www.microsoft.com/en-us/microsoft-365/onedrive/pc-cloud-backup
[googleBackup]:https://www.google.com/drive/download/
