-- V323__seed_class12_cs_ch06_computer_networks_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 6 (Computer Networks)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (WNdbdbmDEy8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3220s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Computer Networks)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000006';

-- 2. Insert 6 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2206-0000-000000000001', '65d29b56-0830-1200-0000-000000000006', 'Evolution of Networking (ARPANET, NSFNET, Internet) & Data Communication Concepts (Sender, Receiver, Message, Media, Protocols)', 1, true),
('65d29b56-0830-2206-0000-000000000002', '65d29b56-0830-1200-0000-000000000006', 'Measuring Media Capacity (Bandwidth, Data Transfer Rate), IP Addressing & Switching (Circuit vs Packet)', 2, true),
('65d29b56-0830-2206-0000-000000000003', '65d29b56-0830-1200-0000-000000000006', 'Transmission Media: Guided (Twisted Pair, Coaxial, Fiber Optic) & Unguided (Radio, Microwave, Infrared)', 3, true),
('65d29b56-0830-2206-0000-000000000004', '65d29b56-0830-1200-0000-000000000006', 'Network Topologies (Bus, Star, Tree) & Network Types (PAN, LAN, MAN, WAN)', 4, true),
('65d29b56-0830-2206-0000-000000000005', '65d29b56-0830-1200-0000-000000000006', 'Network Connecting Devices: Modem, RJ45, Ethernet Card, Repeater, Hub, Switch, Router, Gateway & WiFi Card', 5, true),
('65d29b56-0830-2206-0000-000000000006', '65d29b56-0830-1200-0000-000000000006', 'Network Protocols (HTTP, HTTPS, FTP, PPP, SMTP, POP3, TCP/IP, TELNET, VoIP) & Web Services (WWW, HTML, XML, URLs, DNS)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3206-0000-000000000001', '65d29b56-0830-2206-0000-000000000001', 'VIDEO', 'Evolution of Networking (ARPANET, NSFNET, Internet) & Data Communication Concepts (Sender, Receiver, Message, Media, Protocols)', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&end=580s', true, 1),
('65d29b56-0830-3206-0000-000000000002', '65d29b56-0830-2206-0000-000000000002', 'VIDEO', 'Measuring Media Capacity (Bandwidth, Data Transfer Rate), IP Addressing & Switching (Circuit vs Packet)', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&t=580s&end=1060s', true, 1),
('65d29b56-0830-3206-0000-000000000003', '65d29b56-0830-2206-0000-000000000003', 'VIDEO', 'Transmission Media: Guided (Twisted Pair, Coaxial, Fiber Optic) & Unguided (Radio, Microwave, Infrared)', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&t=1060s&end=1580s', true, 1),
('65d29b56-0830-3206-0000-000000000004', '65d29b56-0830-2206-0000-000000000004', 'VIDEO', 'Network Topologies (Bus, Star, Tree) & Network Types (PAN, LAN, MAN, WAN)', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&t=1580s&end=2120s', true, 1),
('65d29b56-0830-3206-0000-000000000005', '65d29b56-0830-2206-0000-000000000005', 'VIDEO', 'Network Connecting Devices: Modem, RJ45, Ethernet Card, Repeater, Hub, Switch, Router, Gateway & WiFi Card', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&t=2120s&end=2640s', true, 1),
('65d29b56-0830-3206-0000-000000000006', '65d29b56-0830-2206-0000-000000000006', 'VIDEO', 'Network Protocols (HTTP, HTTPS, FTP, PPP, SMTP, POP3, TCP/IP, TELNET, VoIP) & Web Services (WWW, HTML, XML, URLs, DNS)', 'https://www.youtube.com/watch?v=WNdbdbmDEy8&t=2640s&end=3220s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
